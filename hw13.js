// ********************************* 1 *************************************

function add(a, b){
    return (a * 100 + b * 100) / 100;
}

function getCircleLength(radius) {
    return 2 * Math.PI * radius;
}
    
function getCircleArea(radius) {
    return Math.PI * radius ** 2;
}
    

// console.log(getCircleLength(22));
// console.log(getCircleArea(9));
// console.log(getCircleArea());
// console.log(getCircleLength());

// ******************************** 4 *******************************************

const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
    ];
    


module.exports = { add, getCircleArea, getCircleLength, food };