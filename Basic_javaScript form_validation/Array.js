const array = [2, 3, "abcdf", true];

const lastDeleted = array.pop();
console.log(lastDeleted);
// array(1)
// array.push()
// array.shift()
// array.unshift(1)
//Example 1: Using Array length in for loop

for (i = 0; i < Array.length; i++) {
  console.log("running loop");
  console.log(array[i]);
}

array.forEach((data, index, array) => {
  console.log(data, index, array); //if you target the whole value in the array
});
array.forEach((data) => {
  console.log(data); //target the only data
});

array.forEach((data, index) => {
  console.log(index); //target the index. Any thing you like to target you must input the data first as the first value.
});
// ARRAY MAP WITH STUDENTS GRADES EXAMPLE

const scores = [40, 56, 60, 30, 42, 58, 70, 77, 34, 80];
const stutendsGrade = scores.map((scores, index, array) => {
  if (scores > 49) {
    console.log(scores);
    return "Pass";
  } else {
    return "Fail";
  }
});

// function newFunction(scores) {
//   console.log(scores);
// }
//CLASS WORK:

const twoLayerArray = [
  ["sample", "1", true],
  ["text", false, 9],
];
// twoLayerArray.forEach((data, index, array) => {
//   data.forEach((data) => {
//     console.log(data);
//   });
// });

for (j = 0; j < twoLayerArray.length; j++) {
  const newLayer = twoLayerArray[j].length;
  for (k = 0; k < newLayer; k++) {
    console.log(twoLayerArray[i][k]);
  }
}

// const displayAll = () => {
//   twoLayerArray.forEach((data) => {
//     data.forEach((data) => {
//       console.log(data);
//     });
//   });
// };
// displayAll();

//ARRAY LENGHT

let city = ["California", "Barcelona", "Paris", "Kathmandu"];

let lent = city.length;
console.log(lent);

//Example 2: Using Array length in for loop
// var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// for (i = 0; i < languages.length; i++) {
//   console.log(languages[i]);
// }

// You can also REASIGN the Length property of an Array using the assignment operator =.

// Syntax to assign the Array length:

// array.length = <Integer>

//Example 3: Changing length property of Array Operators

let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// truncate the Array to 3 elements
languages.length = 3;

// Output: [ 'JavaScript', 'Python', 'C++' ]
console.log(languages);

// extend the Array to length 6
languages.length = 6;

// Output: [ 'JavaScript', 'Python', 'C++', <3 empty items> ]
console.log(languages);

//JAVASCRIPT ARRAY MAP() METHOD

//The map() method creates a new array with the results of calling a function for every array element.

// let numbers = [2, 4, 6, 8, 10];

// // function to return the square of a number
// function square(number) {
//   return number * number;
// }

// // apply square() function to each item of the numbers list
// let square_numbers = numbers.map(square);
// console.log(square_numbers);

// Output: [ 4, 16, 36, 64, 100 ]
// square function was called inside the array map() method.

//map() Syntax
// The syntax of the map() method is:

// arr.map(callback(currentValue), thisArg)
//Here, arr is an array.

//map() PARAMETERS
// The map() method takes in:

// callback - The function called for every array element. Its return values are added to the new array. It takes in:
// currentValue - The current element being passed from ..the array.
// thisArg (optional) - Value to use as this when executing callback. By default, it is undefined.

//map() Return Value
// Returns a new array with elements as the return values from the callback function for each element.

// Notes:

// map() does not change the original array.
// map() executes callback once for each array element in order.
// map() does not execute callback for array elements without values.

//Example 1: MAPPING ARRAY ELEMENTS USING CUSTOM FUNCTION

const prices = [1800, 2000, 3000, 5000, 500, 8000];

let newPrices = prices.map(Math.sqrt);

// [ 42.42640687119285, 44.721359549995796, 54.772255750516614,
//   70.71067811865476, 22.360679774997898, 89.44271909999159 ]
console.log(newPrices);

// custom arrow function
const string = "JavaScript";
const stringArr = string.split(""); // array with individual string character

let asciiArr = stringArr.map((x) => x.charCodeAt(0));

// map() does not change the original array
console.log(stringArr); // ['J', 'a', 'v', 'a','S', 'c', 'r', 'i', 'p', 't']

console.log(asciiArr); // [ 74,  97, 118,  97, 83,  99, 114, 105, 112, 116 ]

// Example 2: map() FOR OBJECT ELEMENTS IN ARRAY

const employees = [
  { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
  { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
  { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
  { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// calculate the net amount to be given to the employees
const calcAmt = (obj) => {
  newObj = {};
  newObj.n = obj.name;
  newObj.netEarning = obj.salary + obj.bonus - obj.tax;
  return newObj;
};

let netAmount = employees.map(calcAmt);
console.log(netAmount);

//JAVASCRIPT ARRAY OF() METHOD
/...The of() method creates a new Array instance from the given arguments.../;

//Example;
// creating an array named alphabets with elements A,B,C
let alphabets = Array.of("A", "B", "C");

// display contents of alphabet'
console.log(alphabets);

// Output: [ 'A', 'B', 'C' ]

/... of() Syntax The syntax of the of() method is: ../;

// /... Array.of(element0, element1, ..., elementN) The of() method, being a static method, is called using the Array class name .../

// /...of() Parameters The of() method can take n number of parameters: n specifies the number of elements inside the new array.../

//Example 1: Using of() method

// creating an array 1 element
let numbers = Array.of(3);

console.log(numbers); // [ 3 ]

// creating an array with 3 string elements
let fruits = Array.of("Apple", "Banana", "Grapes");

console.log(fruits); // [ 'Apple', 'Banana', 'Grapes' ]

// creating an array with 4 integers
let primeNumbers = Array.of(2, 3, 5, 7);

console.log(primeNumbers); // [ 2, 3, 5, 7 ]

// THE of() method is used to create array from data data.

// Example 2: Array of() Method and Array Constructor

// creating an array with one element using Array.of()
let evenNumber = Array.of(2);

// displays the length of evenNumber
console.log(evenNumber.length); // 1

// displays content inside evenNumber
console.log(evenNumber); // [2]

// creating an empty array of length 2 using Array constructor
// let numbers = Array(2);

// displays the length of 'numbers' array
console.log(numbers.length); //  2

// displays the content inside 'numbers'
console.log(numbers); //  [ <2 empty items> ]
