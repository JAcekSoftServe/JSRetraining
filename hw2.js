//************************** 1 *****************************

let x = 1;
let y = 2;

let res1 = String(x) + String(y);// Add the code, it is necessary to use the variables x and y can be done: "" + x + y
console.log(res1); // "12"
console.log( typeof res1); // "string"

let res2 = Boolean(x) + String(y);// Add code is required use variables x and y; can be done: Boolean(x) + "" + y
console.log(res2); // "true2"
console.log( typeof res2); // "string"

let res3 = Boolean(x) || Boolean(y); // Add code is required use variables x and y
console.log(res3); // true
console.log( typeof res3); // " boolean "
// console.log(Boolean(x));
// console.log(Boolean(y));

let res4 = String(x) * y * "abc"; // Add code is required use variables x and y (chaniging x to String was not enough) - 
//can be done: parseFloat(Boolean(x))
console.log(res4); // NaN
console.log( typeof res4); // "number"

//******************************************* 2 *****************************************

let userNumber = +prompt("Enter chosen number");

//a
if(userNumber >= 0) {
    console.log("The Number is positive");
} else {
    console.log("The number is negative");
}

if(userNumber % 2 === 0 && userNumber >0) {
    //code here : paired positive
}

//b
if(userNumber % 7 === 0) {
    console.log("The number is a multiple of 7")
} else {
    console.log("The number is not a multiple of 7")
}

// ****************************** 3 *************************************
const NewArray = [];
let userEntry = prompt("Enter any value:"); //could be done: NewArray[4] = prompt("enter a new value")

NewArray.push(7);
NewArray.push("A string");
NewArray.push(true);
NewArray.push(null);
NewArray.push(userEntry);

alert("Array length is: " + NewArray.length);
alert("Users entry = " + NewArray[4]);

NewArray.shift();

console.log(NewArray);

// ******************************** 4 *********************************

let cities = [" Rome ", " Lviv ", " Warsaw "];
let ribbon = cities.join("*");

console.log(ribbon);

// ***************************** 5 *********************************
let isAdult = Number(prompt("Enter you age: "));

if(isAdult >= 18) {
    alert("You have reached the age of majority");
} else {
    alert("You are still too young");
}

// ********************************* 6 *********************************
let triangleDim = [];

alert("In next steps enter lenghts of a trangle");
let a = parseFloat(prompt("Enter value a:"));
let b = parseFloat(prompt("Enter value b:"));
let c = parseFloat(prompt("Enter value c:"));

triangleDim.push(a, b, c);
console.log(triangleDim);

function checkArrayTypes(array) {
  array.forEach((element) => {
      if (typeof element !== 'number') {
          alert("Incorrect data");
      }
  });
}

checkArrayTypes(triangleDim); // I get NaN as result, not "Incorrect data" --need to invstigate this, another check shuold be also done: if a + b > c || a + c > b || b + c > a (if not: "Not a triangle")

let semiParameter = (a +b +c)/2
console.log(semiParameter)
let triangleArea = Math.sqrt(semiParameter * (semiParameter - a) * (semiParameter - b) * (semiParameter - c));
let roundedArea = triangleArea.toFixed(3)
alert(roundedArea);

// ****************************** 7 ****************************
let currentTime = new Date();
let currentHour = currentTime.getHours();

//let currentHour = 23;
console.log(currentTime);
console.log(currentHour);

if(currentHour >= 23 && currentHour < 24 || currentHour >= 0 && currentHour < 5) {
    alert("Good night");
} else if (currentHour >=5 && currentHour < 11) {
    alert("Good morning");
} else if (currentHour >= 11 && currentHour < 17) {
    alert("Good day");
} else if (currentHour >= 17 && currentHour < 23) {
    alert("Good evening");
}

//add case solution here

switch(currentHour){
    case (currentHour >= 23 || currentHour < 5):
        alert("Good night");
        break;
    case (currentHour >= 5 && currentHour < 11):
        alert("Good morning");
        break;
    case (currentHour >= 11 && currentHour < 17):
        alert("Good day");
        break;
    default:
        alert("Good evening");
}