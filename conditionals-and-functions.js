/*
 * Conditionals, Functions, Scope and Loops
 */

let equals = 1===1;
let greaterThan = 5 > 1;
let lessThan = 2 < 10;
let lessThanEq = 4 <= 9;
let greaterThanEq = 5 >= 5;
let notEquals = 5 !== 2;

console.log(equals)


let storeA = 3.10;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}
//compareStorePrices(10,5)
//compareStorePrices(7,10)

// Important to try and make sure your functions only do one thing

function squarenum (number) {
    return number * number;

}
let squaredNumber = squarenum(4)
console.log(squaredNumber);

//                        0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++) {
    console.log(ourArray[i]);
    for(let j =0; j<10; j++) {
        console.log('j is equal to;' + j);
    }
}

let x = 0;
while (x < 10) {
    console.log('ran');
    x = x + 1;
}
