# Responsive Website

A simple responsive website made with `HTML` and `CSS` and `Javascript`

![responsive](https://github.com/user-attachments/assets/2672840e-4e02-44a2-9606-8d22c23bcaed)

-------------------------------

# Structure

The website's files are organized within the `/website` folder, which contains subdirectories for images, JavaScript files, and styles. 

```
/root
│
├── /error
│   ├── 404.html
│   └── 500.html
│
├── /ssl
│   ├── your-private-key.pem
│   └── your-certificate.pem
│
├── /website
│   ├── /imgs
│   ├── /js
│   │   ├── /exports
│   │   │   └── tags.js
│   │   └── main.js
│   ├── /style
│   │   └── responsive.css
│   └── index.html
│
├── node.exe
├── server-ssl.js
└── start-windows.bat
```

The `index.html` file uses `js/main.js`, which is responsible for loading the JavaScript modules from the `js/exports` folder.

-------------------------------

# SSL Server

### Start the [Server](https://github.com/FirstTimeEZ/server-ssl)

Right click and select [`Open Git Bash Here`](https://git-scm.com/downloads/win) in the same folder as `start-windows.bat`

```
./start-windows.bat
```