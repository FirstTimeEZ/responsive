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
├── server.js
└── server-ssl.js
```

The `index.html` file uses `js/main.js`, which is responsible for loading the JavaScript modules from the `js/exports` folder.

-------------------------------

# SSL Server

The server itself is included with [`Node.js`](https://nodejs.org/en), so you should install the most recent version.

### Create SSL Certificate

If you don't have a `certificate` and `private key` in `pem format` and are developing locally you can create one

Open the [`Open Git Bash Here`](https://git-scm.com/downloads/win) in the same folder as `server-ssl.js` and run this command

```
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout private-key.pem -out certificate.pem -days 365 -subj "//CN=localhost"
```

### Start the Server

Open the [`Open Git Bash Here`](https://git-scm.com/downloads/win) in the same folder as `server-ssl.js` and run this command

```
node server-ssl.js port=443
```

![](https://i.imgur.com/ULvqsvt.png)

You can then view the website in your browser at `https://localhost`

Your browser may warn you the certificate is self signed, this is normal.

If you changed the port you have to use `https://localhost:PORT/`

### 404/500 Pages

The server is configured to serve custom `404` and `500` error pages. 

![](https://i.imgur.com/rnQR2pq.png)

Currently everything is treated like a `Server Error` except for `Page Not Found`

If you want to add more specific custom error pages, place them in the `/error` folder and update `server.js`

### Port

By default, the server runs on port `3000`

You can provide a different port as an argument.

```
node server-ssl.js port=443
```

You can also set the `PORT` env variable in `Node.js` or modify `server-ssl.js`