// VARIABLE AND DATATYPES

// Q + A
// 1) Assigning a value to a variable: [let, const] variableName = value;
// 2) Change value of variable: variableName = newValue;
// 3) Assign existing var to new var: newVariable = existingVariable;
// 4) Declare: let variableName;
//      Assign: let variableName = value;
//      Define: Another term for assign;
// 5) Pseudocode is writing out what you want the program to do on the computer
//      using a proper flow, but not using real coding syntax.
// 6) 80% thinking, 20% coding (approximately)

// Strings
// 1)
let firstVariable = 'Hello World';
firstVariable = 99;
let secondVariable = firstVariable;
secondVariable = 'Whats up';
// firstVariable still equals 99

// 2)
const yourName = 'Jake Mink';
const sentence = 'Hello, my name is ';
const full = sentence + yourName;
console.log(full);

// Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true != false);
console.log(false || false || false || false || false || false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b == c);
console.log(a * a == d);
console.log(48 == '48');

// The farm
const animal = 'cow';
const animalFarm = (param)=>{
    if (param == 'cow'){
        console.log('Moooooo');
    } else {
        console.log("Hey! You're not a cow.");
    }
}

animalFarm(animal);

// Driver's Ed
const ageVar = 16;
const ageFun = ()=>{
    if (ageVar > 15) {
        console.log('Here are the keys');
    }
    else {
        console.log("Sorry, you're too young");
    }
}

ageFun();

// LOOPS
// The basics
// 1)
// for (let i = 0; i < 11; i++) {
//     console.log(i);
// }

// // 2)
// for (let i = 0; i < 401; i++) {
//     console.log(i);
// }

// // 3)
// for (let i = 12; i < 4001; i+=3) {
//     console.log(i);
// }

// Get even
// 1)
for (let i = 0; i < 101; i+=2){
    console.log(i);
}

// 2)
for (let i = 0; i < 101; i+=2){
    console.log(i + '<-- is an even number');
}

// Give me Five
// 1)
for (let i = 0; i < 101; i++) {
    if (i % 5 == 0) {
        console.log(`I found a ${i}. High five!`);
    }
}

// 2)
for (let i = 0; i < 101; i++) {
    if (i % 5 == 0) {
        console.log(`I found a ${i}. High five!`);
    }
    else if (i % 3 == 0) {
        console.log(`I found a ${i}. Three is a crowd`);
    }
}

// Saving Account
// 1)
const sumMoney = (num)=>{
    let sum = 0;
    for (let i = 0; i < num + 1; i++){
        sum += i;
    }
    return sum;
}

let bank_account = sumMoney(10);
console.log(bank_account);

// 2)
const sumMoney2 = (num)=>{
    let sum = 0;
    for (let i = 0; i < num + 1; i++){
        sum += i;
    }
    return sum*2;
}

bank_account = sumMoney2(100);
console.log(bank_account);

// Multiples of 3 and 5
// I've already done this!