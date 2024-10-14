//to be completed asap

// ********************************** 1 *******************************

// let newWindow = window.open("", "", "width=300, height=300") //empty window

// setTimeout(function () {
//     newWindow.resizeBy(500, 500)
// }, 2000);

// setTimeout(function () {
//     newWindow.moveTo(200, 200)
// }, 4000);

// setTimeout(function () {
//     newWindow.close()
// }, 6000);

// // ****************************** 2 *****************************

// function changeCSS() {
//     // Select the <p> tag using its id
//     let textElement = document.getElementById("text");

//     // Change the font color, size, and family
//     textElement.style.color = "orange";
//     textElement.style.fontSize = "20px";
//     textElement.style.fontFamily = "Comic Sans MS";
// }

// ********************************* 3 *********************************

// // Button 1: Change background color to blue on click
// document.getElementById("btn1").addEventListener("click", function() {
//     document.body.style.backgroundColor = "blue";
// });

// // Button 2: Change background color to pink on double-click
// document.getElementById("btn2").addEventListener("dblclick", function() {
//     document.body.style.backgroundColor = "pink";
// });

// // Button 3: Change background color to brown when holding, and back to white on release
// const btn3 = document.getElementById("btn3");
// btn3.addEventListener("mousedown", function() {
//     document.body.style.backgroundColor = "brown";
// });
// btn3.addEventListener("mouseup", function() {
//     document.body.style.backgroundColor = "white";
// });

// // Link: Change background to yellow when hovering, back to white when not hovering
// const link = document.getElementById("myLink");
// link.addEventListener("mouseover", function() {
//     document.body.style.backgroundColor = "yellow";
// });
// link.addEventListener("mouseout", function() {
//     document.body.style.backgroundColor = "white";
// });

// ************************* 4 ***************************

// function deleteSelectedItem() {
//     // Get the select element
//     let selectElement = document.getElementById("chosenNames");

//     // Get the index of the selected item
//     let selectedIndex = selectElement.selectedIndex;

//     // Check if an item is selected
//     if (selectedIndex !== -1) {
//         // Remove the selected item
//         selectElement.remove(selectedIndex);
//     } else {
//         alert("Please select an item to delete.");
//     }
// }

// // Add event listener to the delete button
// document.getElementById("deleteButton").addEventListener("click", deleteSelectedItem);

// ************************************ 5 *************************

// // Function to handle button click event
// function onButtonClick() {
//     document.getElementById("message").innerText = "I was pressed!";
// }

// // Function to handle mouseover event
// function onButtonMouseOver() {
//     document.getElementById("message").innerText = "Mouse on me!";
// }

// // Function to handle mouseout event
// function onButtonMouseOut() {
//     document.getElementById("message").innerText = "Mouse is not on me!";
// }

// // Get the button element
// const button = document.getElementById("actionButton");

// // Add event listeners to the button
// button.addEventListener("click", onButtonClick);         // For click event
// button.addEventListener("mouseover", onButtonMouseOver); // For mouseover event
// button.addEventListener("mouseout", onButtonMouseOut);   // For mouseout event

// ******************************** 6 ******************************

// function updateDimensions() {
//     // Get the current width and height of the window
//     let width = window.innerWidth;
//     let height = window.innerHeight;

//     // Display the width and height on the page
//     document.getElementById("dimensions").innerText = `Width: ${width}px, Height: ${height}px`;
// }

// // Call the function once initially to display the current window size
// updateDimensions();

// // Add event listener to the window resize event
// window.addEventListener("resize", updateDimensions);

// ******************************** 7 ********************************

// const citiesByCountry = {
//     usa: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
//     ger: ["Berlin", "Bon", "Hamburg", "Dresden", "Bamberg"],
//     ukr: ["Lviv", "Kiev", "Kcharkiv", "Odessa", "Sianki"]
// };

// // Get the DOM elements
// const countrySelect = document.getElementById("country");
// const citySelect = document.getElementById("cities");
// const result = document.getElementById("result");

// // Function to handle when the country is selected
// countrySelect.addEventListener("change", function() {
//     const selectedCountry = countrySelect.value;
    
//     // Clear any existing options in the city dropdown
//     citySelect.innerHTML = '<option value="">Select a city</option>';
    
//     if (selectedCountry) {
//         // Populate the city dropdown based on the selected country
//         const cities = citiesByCountry[selectedCountry];
//         cities.forEach(function(city) {
//             const option = document.createElement("option");
//             option.value = city.toLowerCase();
//             option.textContent = city;
//             citySelect.appendChild(option);
//         });
//         citySelect.disabled = false; // Enable the city dropdown
//     } else {
//         citySelect.disabled = true; // Disable if no country is selected
//     }

//     // Clear the result
//     result.textContent = '';
// });

// // Function to handle when the city is selected
// citySelect.addEventListener("change", function() {
//     const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
//     const selectedCity = citySelect.options[citySelect.selectedIndex].text;

//     if (selectedCountry && selectedCity) {
//         // Display the selected country and city
//         result.textContent = `You selected: Country - ${selectedCountry}, City - ${selectedCity}`;
//     }
// });
