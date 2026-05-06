@echo off
chcp 65001 >nul 2>nul
cd /d "%~dp0"

echo ╔══════════════════════════════════════════════╗
echo ║    DAY WEB LEN GITHUB PAGES                  ║
echo ║    (chalachanai.github.io)                    ║
echo ╚══════════════════════════════════════════════╝
echo.
echo Dang xuat du lieu va push len GitHub...
echo.

powershell -ExecutionPolicy Bypass -File "%~dp0publish-github.ps1" -Remote "https://github.com/chalachanai/chalachanai.github.io.git"

echo.
echo ──────────────────────────────────────────────
echo   Web public: https://chalachanai.github.io/
echo   (Mat 1-3 phut de GitHub cap nhat)
echo ──────────────────────────────────────────────
echo.
pause
