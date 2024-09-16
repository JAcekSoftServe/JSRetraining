//let second = 1;
let hour = prompt("Input hours to calculate: ");
let day = prompt("Input days to calculate");
let month = prompt("Input months to calculate"); //lets asume 30 days in the month - if should be used for each month lenght

function calculateSecondsInHour() {
    result = hour * 3600
    return result
};

function calculateSecondsInDay() {
    secondsInDay = day * 28800
    return secondsInDay
};

function calculateSecondsinMonth() {
    secondsInMonth = month * 864000
    return secondsInMonth
}

calculateSecondsInHour(hour);
calculateSecondsInDay(day);
calculateSecondsinMonth(month);

alert(`${result} seconds in ${hour} hours`);
alert(`${secondsInDay} seconds in ${day} days`);
alert(`${secondsInMonth} seconds in ${month} months`);
