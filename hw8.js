// *********************** 1 ******************

const arr = ["Tom", "Sam", "Ray", "Bob"];
const [ x, y , , ...z ] = arr ;

console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// ************************* 2 ********************

const data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
    };

const {names: [ ,name2, , name4], ages: [ , age2, , age4]} = data;

//can be done:
// const {names, ages} = data;
// const [name1, name2....]
// const [age1, age2....]

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26
    
// ************************* 3 *************************

function mul (...args) {
    const numbers = args.filter(arg => typeof arg === 'number');

    if (numbers.length === 0){
        return 0;
    }

    return numbers.reduce((product, num) => product * num, 1)
}
console.log( mul (1, "str", 2, 3, true )); // 6
console.log( mul ( null , "str", false , true )); // 0
 
//  ****************************** 4 *************************

let server = {
    data: 0,
    convertToString(callback) {
        callback(() => this .data + "");
    }
};

let client = {
    server: server,
    result: "",
    calc(data) {
          this .server.data = data;
          this .server.convertToString ( this .notification ());
        },

    notification() {
          return (callback => {
             this .result = callback();
        });
    }
};

client.calc (123);
console.log( client.result ); // "123"
console.log( typeof client.result ); // "string"

// ******************************** 5 ********************************

const keys = [1, 2, 3, 4];
const values = ["div", "span", "b", " i "];

function mapBuilder(keys, values) {
    let map = new Map();

    if (keys.length !== values.length) {
        throw new Error("Arrays must have the same length");
    }

    keys.forEach((key, index) => {
        map.set(key, values[index].trim());
    })

    return map;
};

const map = mapBuilder (keys, values);
console.log( map.size ); // 4
console.log( map.get (2)); // "span"
