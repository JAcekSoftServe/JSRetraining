const os = require("os");

const userName = os.userInfo().username;

// console.log(userName);

function getCurrentDate() {
    const currentDate = new Date();
    return `${currentDate}`;

}

function greetings() {
    let currentHour = new Date().getHours();
    
    console.log(currentHour)

    if(currentHour >= 23 && currentHour < 24 || currentHour >= 0 && currentHour < 5) {
        return "Good night";
    } else if (currentHour >=5 && currentHour < 11) {
        return "Good morning";
    } else if (currentHour >= 11 && currentHour < 17) {
        return "Good day";
    } else if (currentHour >= 17 && currentHour < 23) {
        return "Good evening";
    }
}

// console.log(getCurrentDate());

module.exports = {userName, getCurrentDate, greetings}