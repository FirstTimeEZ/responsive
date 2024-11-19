import { createServer } from 'http';
import { readFile } from 'fs';
import { fileURLToPath } from 'url';
import { join, extname as _extname, dirname  } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Creates an HTTP server that handles incoming requests.
 * 
 * Note: server.js should not be used in a production environment.
 * 
 * For production use, consider using HTTPS by configuring SSL 
 * certificates to ensure secure communication between the client 
 * and the server. For more information on creating an HTTPS server, 
 * please refer to the Node.js documentation: 
 * https://nodejs.org/api/https.html#httpscreateserveroptions-requestlistener
 * 
 * @function
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object to send data back to the client.
 */
const server = createServer((req, res) => {
    let filePath = join(__dirname, 'website', req.url === '/' ? 'index.html' : req.url);

    const extname = _extname(filePath);

    let contentType;

    switch (extname) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        case '.ico':
            contentType = 'image/x-icon';
            break;
    }

    readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                readFile(join(__dirname, '/error/404.html'), (err404, content404) => {
                    if (err404) {
                        res.writeHead(500);
                        res.end('Server Error');
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(content404);
                    }
                });
            } else {
                readFile(join(__dirname, '/error/500.html'), (error500, content500) => {
                    if (error500) {
                        res.writeHead(500);
                        res.end('Server Error');
                    } else {
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        res.end(content500);
                    }
                });
            }
            return;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err);
        return;
    }
    console.log(`Server is running on http://localhost:${PORT}`);
});