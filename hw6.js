// ************************************* 1 *****************************

//solution 1
// let element1 = document.getElementById("test");

// console.log(element1);

// element1.innerHTML = 'Last';

//solution 2

let element2 = document.querySelector("#test");
console.log(element2);

element2.innerHTML = 'Last';

// ***************************** 2 ***************************************

let image = document.querySelector(".image");

image.src = "cat.jpg"
alert(image.src);

// ********************************** 3 ***********************************

const articleHeaders = document.querySelectorAll("#text *");
console.log(articleHeaders);

articleHeaders.forEach(function(element, index) {
    console.log(`Selector text ${index} ${element.textContent}`);
})

// ********************************** 4 *************************************

const listedItems = document.querySelectorAll("#list li");

//console.log(listedItems);

alert(listedItems[0].textContent + ", " +
    listedItems[listedItems.length - 1].textContent + ", " +
    listedItems[1].textContent + ", " +
    listedItems[3].textContent + ", " +
    listedItems[2].textContent
 )

// **************************************** 5 *************************************

document.addEventListener("DOMContentLoaded", function() {
    //add green background
    let header = document.querySelector("h1");
    header.style.backgroundColor = "green";

    //bold the first
    let firstParagraph = document.querySelector("#myDiv p:nth-of-type(1)");
    firstParagraph.style.fontWeight = "bold";

    // Change font color to red for the second paragraph
    let secondParagraph = document.querySelector("#myDiv p:nth-of-type(2)");
    secondParagraph.style.color = "red";

    // Underscore the third paragraph
    let thirdParagraph = document.querySelector("#myDiv p:nth-of-type(3)");
    thirdParagraph.style.textDecoration = "underline";

    // Make the fourth paragraph cursive
    let fourthParagraph = document.querySelector("#myDiv p:nth-of-type(4)");
    fourthParagraph.style.fontStyle = "italic";

    // Concatenate myList into a single horizontal line
    let myList = document.querySelector("#myList");
    let listItems = myList.querySelectorAll("li");
    let concatenatedText = "";
    listItems.forEach(function(item) {
        concatenatedText += item.textContent + " ";
    });
    myList.innerHTML = "<li>" + concatenatedText.trim() + "</li>";
    myList.style.listStyleType = "none";
    myList.style.display = "flex";

    // Make the span invisible
    let span = document.querySelector("span");
    span.style.display = "none";
})

// ***************************************** 6 ******************************************

document.addEventListener("DOMContentLoaded", function() {
    // Prompt the user for the first message and set it to the first input
    let firstMessage = prompt("Enter the first message:");
    let input1 = document.getElementById("input1");
    input1.value = firstMessage;

    // Prompt the user for the second message and set it to the second input
    let secondMessage = prompt("Enter the second message:");
    let input2 = document.getElementById("input2");
    input2.value = secondMessage;

    // Swap the values of the first and second inputs
    let temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
});

// ************************************* 7 ******************************************

document.addEventListener("DOMContentLoaded", function() {
    // Create the <main> element with class "mainClass check item"
    let main = document.createElement("main");
    main.className = "mainClass check item";

    // Create the <div> element with id "myDiv"
    let div = document.createElement("div");
    div.id = "myDiv";

    // Create the <p> element with text content "First paragraph"
    let p = document.createElement("p");
    p.textContent = "First paragraph";

    // Append the <p> element to the <div>
    div.appendChild(p);

    // Append the <div> element to the <main>
    main.appendChild(div);

    // Append the <main> element to the <body>
    document.body.appendChild(main);
});