// const express = require("express");
const http = require("http");
const time = getCurrentDate();
// const cors = require("cors");
// const app = express();

// app.use(cors({ origin: 'http://127.0.0.1:550'}));

// app.listen(8000, () => {
//     console.log('Server is running on http://localhost:8000')
// })

function getCurrentDate() {
    const currentDate = new Date();
    return `${currentDate}`;

}

http.createServer((request, response) => {
    response.writeHead(200, "Content-Type: text/html");
    response.write(`<p>Your vote is accepted on: ${time}</p>`);
    response.end();
}).listen(8000);

console.log("Server is listennig on http://localhost:8000");