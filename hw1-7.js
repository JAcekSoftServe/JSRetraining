let login = prompt("login");
let email = prompt("email");
let password = prompt("password");

function hushPassword(password) {
    return '*'.repeat(password.length)
};

let hushedPassword = hushPassword(password);

alert(`Dear ${login}, your email is ${email} and password is ${hushedPassword}`)
