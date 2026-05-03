# Chala Store normal server setup

This mode runs the web, admin, product data, and uploads from one Node.js server.
Use it when you want to edit products from another device, including a phone.

## Local test on this computer

Open PowerShell in this folder:

```powershell
cd "C:\Users\koih\Documents\New project\echo-vintage"
$env:PORT="8090"
$env:ADMIN_PASSWORD="123456"
$env:SESSION_SECRET="change-this-to-a-long-random-string"
node server.js
```

Then open:

- Storefront: `http://127.0.0.1:8090/index.html`
- Admin: `http://127.0.0.1:8090/admin.html`

Admin has two locks:

- PIN screen: `123456`
- Server admin password: value of `ADMIN_PASSWORD`

## Phone test on the same Wi-Fi

1. Keep the server running on the computer.
2. Find the computer LAN IP, for example `192.168.1.20`.
3. On the phone, open:
   - `http://192.168.1.20:8090/index.html`
   - `http://192.168.1.20:8090/admin.html`
4. If the phone cannot open it, allow Node.js through Windows Firewall.

## Temporary online tunnel from this computer

This keeps the server on this computer, but exposes it through a public HTTPS URL.
It is suitable for going out and editing products from an iPhone.

Current helper:

```powershell
.\run-tunnel.cmd
```

The tunnel prints a public URL like:

```text
https://random-words.trycloudflare.com
```

Open on the phone:

- `https://random-words.trycloudflare.com/index.html`
- `https://random-words.trycloudflare.com/admin.html`

Rules:

- The computer must stay on.
- The Node server must stay running.
- The tunnel process must stay running.
- Quick Tunnel URLs are temporary. A new run usually gives a new URL.
- For a permanent URL under your own domain, create a named Cloudflare Tunnel later.

## Online deploy

Use a Node host/VPS that supports persistent disk storage.

Required settings:

- Start command: `npm start`
- Environment variables:
  - `ADMIN_PASSWORD`: your private admin password
  - `SESSION_SECRET`: a long random secret
  - `MAX_UPLOAD_MB`: optional, default `60`

Important: static hosting alone is not enough for this server mode.
The host must preserve these folders:

- `server-data/` stores products, FAQ, and settings
- `uploads/` stores product images and videos

If the host resets the disk on every deploy, uploaded files will disappear.
