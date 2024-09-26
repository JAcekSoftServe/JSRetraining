//********************** 1 ************************

// let userInput = prompt("Enter coma separated width and height of an rectangle:")

// const dimensions = userInput.split(",").map(Number);

// //console.log(dimensions);

// // for (i = 0; i < dimensions.length; i++) {
// //     console.log(typeof dimensions[i]);
// // }

// //console.log(dimensions.length);

// let area;

// function calcRectangleArea(width, height) {
//     // if (dimensions.length === 0) {
//     //     throw new Error ("No data entered!")
//     // }

//     if (dimensions.length > 2 || dimensions.length < 2) {
//         throw new Error ("Enter only 2 dmiensions!");
//     }

//     for (i = 0; i < dimensions.length; i++) {
//         if (isNaN(dimensions[i])){
//             throw new Error("Input is not a number!"); 
//         }
//     }

//     return width * height;
// }

// area = calcRectangleArea(dimensions[0], dimensions[1]);

// alert(area);

//********************** 2 ***********************

// function checkAge(age) {
//     try{
//         if(age.length === 0 || age == 0){
//             throw new Error ("The field is empty! Please enter your age");
//         }else if(isNaN(age)) {
//             throw new Error ("Input is not a number!");
//         }else if(age < 14) {
//             throw new Error ("Your age is below 14");
//         }else{
//             alert("You have access to watch the movie!")
//         }

//     }catch (error){
//         console.log(error.name);
//         console.log(error.message);
//     }
// }

// let age = +prompt("What's your age?");
// checkAge(age);

//*********************** 3 ***************************** */

// const months = ["January", "February", "March", "Apriol", "May", "June", "July", "August", "September", "October", "November", "December"]

// class MonthException extends Error {
//     constructor(message){
//         super(message);
//         this.name = "MonthException";
//     }
// }

// function showMonthName(month) {
//     try{
//         if(month < 1 || month > 12){
//             throw new MonthException("Incorrect month number! Write number between 1 - 12");
//         }else if(isNaN(month)){
//             throw new Error ("Incorrect data");
//         }else{
//             alert(`Given month is: ${months[num - 1]}`);
//         }
//     }catch(error){
//         console.log(error.name);
//         console.log(error.message);
//     }
// }

// let num = +prompt("Choose monht number");
// showMonthName(num);

// **************************** 4 *******************************

// let userInputData = {};
// let currentId = 0;
// //let id = +prompt("Enter User's number:");
// let userInputs = prompt("Enter coma-separated user's ids:");
// const ids = userInputs.split(",").map(Number);

// console.log(ids);

// function showUser(id) {
//     try{
//         if(userInput < 0){
//             throw new Error (`ID must not be negative: ${userInput}`);
//         }

//         userInputData[`id${currentId}`] = userInput;
//         console.log(userInputData);
//         currentId++;

//     }catch(error){
//         console.log(error.message);
//     }
// }

// //showUser(userInput);

// function showUsers(ids){
//     let results = [];
//     ids.forEach(id => {
//         try{
//             let userObject = showUser(id);
//             results.push(userObject);
//         }catch(error){
//             throw new Error ("Something went wrong");
//         }
//     });
//     return results;

// }

// let users = showUsers(ids);
// console.log(users);

//solution 2:

// let userInputData = {};

// function showUser(id) {
//     if (parseInt(id.replace('id', '')) < 0) {
//         throw new Error (`ID must not be negative: ${id}`);
//     }

//     if (userInputData.hasOwnProperty(id)){
//         return { [id]: userInputData[id] };
//     }else{
//         throw new Error (`ID ${id} not found`);
//     }
// }

// function showUsers(ids) {
//     let results = [];

//     ids.forEach(id => {
//         try{
//             let userObject = showUser(id);
//             results.push(userObject);
//         }catch(error) {
//             throw new Error ("Something went wrong");
//         }
//     });
//     return results;
// }

// let userInput = prompt("Enter coma-separated list of IDs");
// let userIds = userInput.split(',').map(id => id.trim());
// console.log(userIds);

// let users = showUsers(userIds);

// console.log(users);

//solution 3

let users = [];

class User {
    constructor(id){
        this.id = id;
    }
}

function showUser(id) {
    if (id < 0){
        throw new Error (`ID must not be negative ${id}`);
    }

    if (isNaN(id)){
        throw new Error ("Wrong data format! Enter a number");
    }

    console.log(user)

}

function showUsers(ids) {

    let results = [];
    users.forEach(id => {
        try{
            let user = showUser(id);
            results.push(user.id);
        }catch(error){
            throw new Error("Something went wrong!")
        }
    })
}


const userInput = prompt("Enter coma separated Users' IDs:")
let ids = userInput.split(',').map(id => id.trim());

console.log(ids);

for (i = 0; i < ids.length; i++){
    const newUser = new User(ids[i]);
    users.push(newUser[i]);
    showUsers(ids[i]);
}

console.log(users);

//user.id = +prompt("Enter User's ID:");
//users = showUsers(ids);
//const newUser1 = new User("Andy", 41, "Londek");

// console.log(users);
// showUsers(ids);

// console.log(results);

//this one also doesn't work :/