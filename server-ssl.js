import { createServer } from 'https';
import { readFile, readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, extname as _extname, dirname } from 'path';

// openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout private-key.pem -out certificate.pem -days 365 -subj "//CN=localhost"
// node server-ssl.js port=443

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __args = process.argv.slice(2);

let PORT = process.env.PORT || 3000;

__args.forEach((e) => {
    let portArg = e.toLowerCase().includes("port") ? e.split("=")[1] : null
    if (portArg !== null) {
        PORT = portArg;
    }
});

!existsSync('private-key.pem') && certificateNotExist();
!existsSync('certificate.pem') && certificateNotExist();

const options = {
    key: readFileSync('private-key.pem'),
    cert: readFileSync('certificate.pem')
};

/**
 * Creates an HTTPS server that handles incoming requests.
 * 
 * @function
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object to send data back to the client.
 */
const server = createServer(options, (req, res) => {
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

server.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err);
        return;
    }
    console.log(`Server is running on https://localhost:${PORT}`);
});

function certificateNotExist() {
    console.log("You need to generate or provide an SSL Certificate and Private Key in PEM format");
    console.log("You can use the following command from git bash");
    console.log(" ");
    console.log('openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout private-key.pem -out certificate.pem -days 365 -subj "//CN=localhost"');
    process.exit(1);
}