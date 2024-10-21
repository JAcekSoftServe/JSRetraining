const os = require("os");

const userName = os.userName;

function getCurrentDate() {
    const currentDate = new Date();
    return `${currentDate}`;

}

// console.log(getCurrentDate());

export {userName, getCurrentDate}