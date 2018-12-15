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

// ARRAYS AND CONTROL FLOW

// Talk about it
// 1) The things in an array are called elements.
// 2) Arrays guarantee that the order of elements is maintained.
// 3) A real-life thing modelable by an array is a file cabinet filled with files.

// Easy Does It
const quotes = ['Never give up, never surrender',
                "They can take our country, but they'll never take our freedom",
                "You shall know my name is the Lord when I lay my vengeance upon you"];

// Accessing elements
const randomThings = [1, 10, "Hello", true];
// 1) 
randomThings[0];
// 2)
randomThings[2] = 'World';
// 3)
console.log(randomThings);

// Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// 1)
ourClass[2];
// 2)
ourClass[ourClass.length - 1] = 'Octocat';
// 3)
ourClass.push('Cloud City');

console.log(ourClass);

// Mix it Up
const myArray = [5, 10, 500, 20];
// 1)
myArray.push('Egon');
myArray.push('Venkman');
// 2)
myArray.shift();
// 3)
myArray.unshift('Bob Marley');
// 4)
myArray.pop();
// 5)
myArray.reverse(); // .reverse() mutated the original array and did not return anything
// console.log(myArray);

// Biggie Smalls
const intVar = 7;
if (intVar < 100) {
    console.log('little number');
}
else {
    console.log('big number');
}

// Monkey in the Middle
if (intVar < 5) {
    console.log('little number');
}
else if (intVar > 10) {
    console.log('big number');
}
else {
    console.log('monkey');
}

// What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];
  
const thomsCloset = [
[
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
]
];

// 1)
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
// 2)
kristynsCloset.splice(6, 0, 'raybans');
// 3)
kristynsCloset[5] = 'stained knit hat';
// 4)
const item1 = thomsCloset[0][0];
// 5)
const item2 = thomsCloset[1][1];
// 6)
const item3 = thomsCloset[2][2];
// 7)
console.log(`Thom is looking fierce in a ${item1}, ${item2}, and ${item3}!`);
thomsCloset[1][2] = 'footie pajamas';
console.log(thomsCloset);

// FUNCTIONS

// printGreeting
// I've already done this!

// printCool
const printCool = (name)=>{
    return `${name} is cool`;
}

console.log(printCool('Captain Reynolds'));

// calculateCube
const calculateCube = (num)=>{
    return num*num*num;
}
console.log(calculateCube(5));

// isVowel
const isVowel = (char)=>{
    const vowels = ['a','e','i','o','u'];
    char = char.toLowerCase();
    for (let i = 0; i < vowels.length; i++) {
        if (vowels.indexOf(char) > -1){
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(isVowel('y'));

// getTwoLengths
const getTwoLengths = (str1,str2)=>{
    return [str1.split('').length,str2.split('').length];
}
console.log(getTwoLengths('Jake', 'Minkopus'));

// getMultipleLengths
const getMultipleLengths = (arr)=>{
    let length_arr = [];
    for (let i = 0; i < arr.length; i++){
        let str_split = arr[i].split('');
        length_arr.push(str_split.length);
    }
    return length_arr;
}
console.log(getMultipleLengths(['Yo','What','is','the','deal']));

// maxOfThree
const maxOfThree = (num1,num2,num3)=>{
    let biggest;
    if (num1 >= num2 && num1 >= num3){
        biggest = num1;
    }
    else if (num2 >= num1 && num2 >= num3){
        biggest = num2;
    }
    else if (num3 >= num1 && num3 >= num2){
        biggest = num3;
    }
    return biggest;
}
console.log(maxOfThree(6,9,9));

// printLongestWord
const printLongestWord = (str_arr)=>{
    
    let longest = '';
    for (let i = 0; i < str_arr.length; i++){
                if (str_arr[i].length > longest.length){
                    longest = str_arr[i];
                }
        }
    return longest;
}

// console.log(printLongestWord(['thing1','thing2']));
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todddddddddddddddd"]));

// transmogrify
const transmogrify = (num1,num2,num3)=>{
    return Math.pow(num1*num2,num3);
}

console.log(transmogrify(5,3,2));

// reverseWordOrder v2
const reverseWordOrder = (multiWordStr)=>{
    const reverse_arr = [];
    let str_arr = multiWordStr.split(' ');
    for (let i = str_arr.length - 1; i > -1; i--){
        reverse_arr.push(str_arr[i]);
    }
    let back_str = reverse_arr.join(' ');
    return back_str;
}

console.log(reverseWordOrder("Ishmael me Call"));

// Get down and dirty with Math.random()

// 1)
const rand_10 = ()=>{
    return Math.round(Math.random()*10);
}

console.log(rand_10());

// 2)
const rand_100 = ()=>{
    return Math.round(Math.random()*100);
}

console.log(rand_100());

// 3)
const rand_rand = ()=>{
    return Math.floor(532 + Math.random()*(13267 - 532 + 1));
}

console.log(rand_rand());

// 4)
const rand_10_num = ()=>{
    return Math.random()*10;
}

console.log(rand_10_num());

// 5)
quotes.push('Four score and seven years ago...','You\'d say give me five bees for a quarter!');
const getRandomElement = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        return arr[Math.floor(Math.random()*arr.length)];
    }
}

console.log(getRandomElement(quotes));