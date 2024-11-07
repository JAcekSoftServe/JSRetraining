// ************************************ 1 ******************************

function caseCheck(string) {
    if(string.match(/^[A-Z]/)){
        console.log(`String: "${string}" starts with uppercase`)
    }else{
        console.log(`String: "${string}" doesn't start with uppercase`)
    }
}

caseCheck("lower case example");
caseCheck("Upper case example");

// *************************** 2 ******************************

function checkEmail(email){
    let regExp = (/^[\w\.]+@[\w\.]+\.[a-zA-z]{2,}$/);
    return regExp.test(email);
    
}

console.log(checkEmail("email@domain.com"));
console.log(checkEmail("other.email@dot.com"));
console.log(checkEmail("another2.Compli_cated@email3.subdomain.com"));

//try with \s not \w

// ************************** 3 *************************

console.log("cdbBdbsbz".match(/d+b+d?/gi));

// ****************************** 4 *****************************

let inputString = "Java Script";

console.log(inputString.replace(/(\w+)\s+(\w+)/, "$2, $1"));

// ************************ 5 *************************************

function checkCardNumber(cardNumber) {
    if(cardNumber.match(/^\d{4}\-\d{4}\-\d{4}\-\d{4}$/)){
        console.log("Card number is valid");
    }else{
        console.log("Card number is invalid")
    }
}

checkCardNumber("1594-6666-3574-4512");
checkCardNumber("abcd-9514-6666-ijku");
checkCardNumber("1234-96354123-6674");

// ********************************** 6 ***********************************

let newEmail = prompt("enter your email:");

function validateEmail(email){
    // console.log(newEmail);
    let regExp2 = (/^[A-Za-z0-9]+([-]?\w)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    return regExp2.test(email);

}

console.log("Email check: " + validateEmail(newEmail));

// ******************************* 7 *****************************************

function checkLogin(login) {
    const loginRegex = (/^[a-zA-Z]{1}[a-zA-Z\d\.]{1,9}$/);
    const isLoginValid = loginRegex.test(login);

    const numbers = login.match(/\d+(\.\d+)?/g);

    console.log(isLoginValid);

    if (numbers) {
        console.log(numbers.join(", "));
    }else{
        console.log("No numbers found");
    }
}


checkLogin("ee1.1ret3");
checkLogin ('ee1*1ret3');
checkLogin('a');