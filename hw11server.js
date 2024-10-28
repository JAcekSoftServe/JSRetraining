// const http = require("http");
// const time = getCurrentDate();
// const fs = require("fs");
// const path = require("path");

// function getCurrentDate() {
//     const currentDate = new Date();
//     return `${currentDate}`;

// }

// http.createServer((request, response) => {
//     response.writeHead(200, "Content-Type: text/html");
//     response.write(`<p>Your vote is accepted on: ${time}</p>`);
//     response.end();
// }).listen(8000);

// console.log("Server is listennig on http://localhost:8000");

// ******************************** 2 *******************************

// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Serve hw11.html
        fs.readFile(path.join(__dirname, 'hw11.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/hw11client.js') {
        // Serve hw11client.js
        fs.readFile(path.join(__dirname, 'hw11client.js'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(data);
        });
    } else if (req.url === '/authors') {
        // Serve authors.json
        fs.readFile(path.join(__dirname, 'authors.json'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    } else {
        // Serve 404 for any other route
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
