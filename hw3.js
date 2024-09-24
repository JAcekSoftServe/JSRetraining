// *********************************** 1 *************************************** 

//let arr = [2, 3, 4, 5];

// get product of an array: 2 * 3 * 4 * 5

// for example

// let product = 1;

// for (let i = 0; i < arr.length; i++) {
//     product *= arr[i];
// }

// console.log(product);

//while example

// let product = 1;
// let i = 0;

// while (i < arr.length) {
//     product *= arr[i];
//     i++;
// }

// console.log(product);

// *********************************** 2 ***************************************

for (i = 0; i < 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }

    result = (x % 2 === 0) ? "it is even": "it is odd";
    console.log(result);

}

//could be done with ternary operator:


// *********************************** 3 ***************************************

let arr = [];

function randArray(length) {
    for (i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * 500) + 1; //shuld be done with arr.push(Math.....)
    }
}

randArray(7);

console.log(arr);

// *********************************** 4 ***************************************

let a = parseInt(prompt("Enter the number:"));
let b = parseInt(prompt("Enter the degree:"));


function raiseToDegree(a, b) {
    return Math.pow(a, b);

}

result = raiseToDegree(a, b); 

alert(result);

// *********************************** 5 ***************************************

// find minimum function

const userInput = prompt("Enter comma-separated numbers:");

const numbers = userInput.split(",").map(Number);

console.log(numbers);

function findMin(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    let minValue = arr[0];
    for (i = 1; i < minValue; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return minValue;

    // return Math.min(...arguments); //.. dots: spread operator - it copies all arguments from array

}

let min = findMin(numbers);

console.log(`Minimum value is: ${min}`);

// *********************************** 6 ***************************************

//const userInput = prompt("Enter comma-separated numbers:");

//const numbers = userInput.split(",").map(Number);

function findUnique(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.includes(arr[i])) {
            continue;
        }
        uniqueArr.push(arr[i]);
    }
    return uniqueArr;
}

let uniqueNumbers = findUnique(numbers);

console.log(uniqueNumbers);
console.log(numbers);

console.log(numbers.length === uniqueNumbers.length); // is true if numbers are unique

// Set())arr) <-- Set can not have duplicates by default

// *********************************** 7 ***************************************

//const userInput = prompt("Enter comma-separated numbers:");
//let x = parseInt(prompt("Enter the number of elements to display:"));
let x = userInput[userInput.length - 1];

//const numbers = userInput.split(",").map(Number);

function displayLastNElements(arr, n) {
    for (i=arr.length-n; i<arr.length; i++) {
        console.log(arr[i]);
    }
}

console.log(numbers)
displayLastNElements(numbers, x);

console.log(`Last ${x} elements of ${userInput} are:`, numbers.slice(-x)); //what if user enter 0 at the end? 

// *********************************** 8 ***************************************

let userInputString = prompt("Enter a string:");

function convertToCapital(str) {
    let words = str.split(" ");
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
}

console.log(convertToCapital(userInputString));