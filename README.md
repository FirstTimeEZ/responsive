# Responsive Website

A simple responsive website made with `HTML` and `CSS` and `Javscript`

# Preview

![preview](https://github.com/user-attachments/assets/585b558c-286f-4345-b32d-ab0357c61e79)

# Responsive

![responsive](https://github.com/user-attachments/assets/2672840e-4e02-44a2-9606-8d22c23bcaed)

# Server

### Start

You can start the `server` with `Node.js`

```
node server.js
```

![](https://i.imgur.com/xLGqPKN.png)

```
http://localhost:3000/
```

### 404/500 Pages

The server is configured to serve custom `404` and `500` error pages. 

If you want to add more specific custom error pages, place them in the `/error` folder.

### Port

By default, the server runs on port `3000`. 

If you want to change the port, you can set the `PORT` environment variable in your `Node.js` environment:

```js
const PORT = process.env.PORT || 3000;
```

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
└── server.js
```

The `index.html` file uses `js/main.js`, which is responsible for loading the JavaScript modules from the `js/exports` folder.
