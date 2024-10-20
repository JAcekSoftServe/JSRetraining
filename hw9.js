// ************************************* 1 ***************************

function getPromise(message, delay) {
    return new Promise((resolve) => {
        setTimeout(function(){
            console.log(message)

        },delay)

    })

}


getPromise("test promise", 2000).then(function(data) {
    console.log(data);	
    });
// Result : after 2 seconds , "test promise" is displayed in the console

// ****************************************** 2 ******************************

function calcArrProduct(arr){
    return new Promise((resolve, reject) => {
        let product = 1;

        arr.forEach(element => {
            if(typeof element !== 'number'){
                reject("Error! Incorrect array!");
            }
            product *= element;

        })
        resolve(product);
    })
}

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct ( [5,"user2", 7, 12]).then(result => console.log(result));
// "Error! Incorrect array!"

// *************************************** 3 ********************************

const delay = (i, time) => new Promise( resolve => setTimeout (() => resolve(i), time));
function showNumbers ( ) {
	// your code with using delay( i, time)
    let promise = Promise.resolve();

    for(i=0; i<=10; i++){
        const randomTime = Math.floor(Math.random() * 3000);

        promise = promise.then(() => delay(i, randomTime)).then((value) => {
            console.log(value);
        })
    }
}

showNumbers();

// ***************************************************** 4 *********************************

const delay = (i, time) => new Promise( resolve => setTimeout (() => resolve(i), time));
    
async function showNumbers() {
    for (i = 0; i <= 10; i++){
        const randomTime = Math.floor(Math.random() * 3000);
        const value = await delay(i, randomTime);
        console.log(value);
    }
}

showNumbers();
