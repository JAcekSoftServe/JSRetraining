// *************************************** 1 **********************************

//serwer:

// const http = require("http");
// const os = require("os");
// const path = require("path");
// const fs = require("fs");

// let userName = os.userInfo().username;
// let osType = os.type();
// let sysWorkTime = (os.uptime()/60).toFixed(2);
// let workDir = path.dirname(__dirname);
// let fileName = path.basename(__filename);

// // console.log(userName);
// // console.log(osType);
// // console.log(sysWorkTime);
// // console.log(workDir);
// // console.log(fileName);

// http.createServer((request, response) => {
//    const filePath = path.join(__dirname, "info.html");
//     console.log(filePath);

//     fs.readFile(filePath, "utf-8", (error, data) => {
//         let modifiedData = data.replace('<!--USERNAME-->', userName);
//         modifiedData = modifiedData.replace('<!--OSTYPE-->', osType);
//         modifiedData = modifiedData.replace('<!--WORKTIME-->', sysWorkTime);
//         modifiedData = modifiedData.replace('<!--WORKDIRECTORY-->', workDir);
//         modifiedData = modifiedData.replace('<!--FILENAME-->', fileName);
    
//     response.writeHead(200, "Content-Type: text/html");
//     // response.write(data);
//     response.end(modifiedData);
//     })
// }).listen(5000);

// console.log("Server is listennig on http://localhost:5000");

// *********************************** 2 *************************************
const http = require("http");
const { userName, getCurrentDate, greetings } = require("./personal-module");

let name = userName;
let time = getCurrentDate();
let message = greetings();

console.log(name);
console.log(time);

http.createServer((request, response) => {
    response.writeHead(200, "Content-Type: text/html");
    response.write(`<p>Date of request ${time} </p>`);
    response.write(`<p>${message} ${name}.</p>`);
    response.end();
}).listen(8000);

console.log("Server is listennig on http://localhost:8000");