const os = require("os");

const userName = os.userInfo().username;

console.log(userName);

function getCurrentDate() {
    const currentDate = new Date();
    return `${currentDate}`;

}

// console.log(getCurrentDate());

module.exports = {userName, getCurrentDate}