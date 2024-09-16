let firstName ;
let lastName;
let studyGroup;
let birthYear;
let martialStatus;

firstName = "John";
lastName = "Black";
studyGroup = "A";
birthYear = 1997;
martialStatus = true;

let variables = [
    {value: firstName, type: typeof firstName},
    {value: lastName, type: typeof lastName},
    {value: studyGroup, type: typeof studyGroup},
    {value: birthYear, type: typeof birthYear},
    {value: martialStatus, type: typeof martialStatus}
];

function sortByType(a, b) {
    const typeOrder = ['number', 'boolean', 'string'];
    return typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type)
}

variables.sort(sortByType);

variables.forEach(variable => {
    console.log(`Type: ${variable.type}, Value: ${variable.value}`)
})

let empty = null;
let notDefined;

console.log(typeof empty);
console.log(typeof notDefined);
