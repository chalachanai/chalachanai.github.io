@echo off
chcp 65001 >nul 2>nul
cd /d "%~dp0"

echo ========================================
echo   CHALA STORE - CHE DO QUAN CA PHE
echo   Server + Tunnel + Admin - 1 buoc!
echo ========================================
echo.

REM -- Kiem tra cloudflared --
if not exist "tools\cloudflared.exe" (
    echo [LOI] Khong tim thay tools\cloudflared.exe
    pause
    exit /b 1
)

REM -- Xoa log cu --
del /q tunnel.log 2>nul
del /q tunnel.err 2>nul

echo [1/3] Dang khoi dong server local (port 8090)...
start "ChalaServer" /min "%~dp0run-server.cmd"

timeout /t 3 /nobreak > nul

echo [2/3] Dang mo Cloudflare Tunnel...
echo       (Doi khoang 5-10 giay de lay link online)
echo.
start "ChalaTunnel" /min "%~dp0run-tunnel.cmd"

REM -- Doi tunnel tao link --
echo Dang cho Cloudflare tao link...
set TUNNEL_URL=
set /a COUNT=0

:wait_loop
if %COUNT% GEQ 30 goto no_tunnel
timeout /t 1 /nobreak > nul
set /a COUNT+=1

if exist tunnel.err (
    for /f "tokens=*" %%A in ('findstr /C:"trycloudflare.com" tunnel.err 2^>nul') do (
        for /f "tokens=*" %%U in ('powershell -NoProfile -Command "$l='%%A'; if($l -match 'https://[a-z0-9-]+\.trycloudflare\.com'){$matches[0]}"') do (
            set "TUNNEL_URL=%%U"
        )
    )
)
if "%TUNNEL_URL%"=="" goto wait_loop

echo.
echo ========================================
echo   ONLINE THANH CONG!
echo ========================================
echo.
echo   Link ONLINE (dung o bat ky dau):
echo.
echo   Trang khach:  %TUNNEL_URL%/
echo   Trang admin:  %TUNNEL_URL%/admin.html
echo.
echo   Link LOCAL (chi tren may nay):
echo   http://127.0.0.1:8090/
echo   http://127.0.0.1:8090/admin.html
echo.

echo [3/3] Dang mo 2 web online tren trinh duyet...
start "" "%TUNNEL_URL%/"
start "" "%TUNNEL_URL%/admin.html"

echo %TUNNEL_URL%/admin.html| clip

echo.
echo ----------------------------------------
echo   GIU CUA SO NAY MO de server chay.
echo   Bam phim bat ky de TAT tat ca.
echo ----------------------------------------
echo.
echo   Da copy link admin online vao clipboard.
echo   Muon day len web? Mo: 03-DAY-LEN-WEB.cmd
echo.
pause

REM -- Tat server va tunnel --
echo.
echo Dang tat server va tunnel...
taskkill /f /fi "WINDOWTITLE eq ChalaServer*" >nul 2>nul
taskkill /f /fi "WINDOWTITLE eq ChalaTunnel*" >nul 2>nul
taskkill /f /im cloudflared.exe >nul 2>nul
for /f "tokens=5" %%P in ('netstat -aon ^| findstr ":8090" ^| findstr "LISTENING" 2^>nul') do (
    taskkill /f /pid %%P >nul 2>nul
)
echo Da tat xong!
timeout /t 2 > nul
exit /b 0

:no_tunnel
echo.
echo [LOI] Khong the tao tunnel sau 30 giay.
echo Kiem tra internet va thu lai.
echo.
if exist tunnel.err (
    echo Noi dung tunnel.err:
    type tunnel.err
)
echo.
pause
exit /b 1
