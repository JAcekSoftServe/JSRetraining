const http = require("http");
const time = getCurrentDate();

function getCurrentDate() {
    const currentDate = new Date();
    return `${currentDate}`;

}

http.createServer((request, response) => {
    response.writeHead(200, "Content-Type: text/plain");
    response.write(`Your vote is accepted on ${time}`);
    response.end();
}).listen(8000);

console.log("Server is listennig on http://localhost:8000");