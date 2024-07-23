var a = 2;
let b = "2";
const c = 45;
const myArray = ["abcd", "1234", 233, true];

// OPERATORS
// Assignment Operators
// =

// Arithimetics

// + - * / %

// Logical Operators:
// || && == === != (if and expression is true? do this : otherwise) Mostly what logical operators do is to return true or false value.

console.log("2" == 2); /*if value are same*/
console.log("2" === 2); /* if the value and data type same*/
console.log(true);
console.log(!true);
console.log("2" != 2);

// BASIC OPERATORS:
// ++ -- += -= /= *=  %=

console.log(++a); /*Pre Increament*/
console.log(a++); /* Post Increament*/
console.log(a);

console.log(--a); /*Pre Decreament*/
console.log(a--); /* Post Decreament*/
console.log(a);

a += 5; // a=a+5
console.log(a);

// a += 12; // a=a+12
// console.log(a);

a -= 12; // a=a-12
console.log(a);

a /= 12; // a=a/12
console.log(a);

a *= 12; // a x 12
console.log(a);

a %= 15; // a % 12
console.log(a);

//CONDITIONAL STATEMENT
const firstName = "Tobi";
const age = 20;
const score = 50;
if (a == 15) {
  // console.log(`my name is` + `firstName+` and my age is: `+age` )
  console.log(`my name is ${firstName}  and my age is ${age}`);
}
if (a == 15 || firstName == "Tobi") {
  console.log(`my name is ${firstName}  and my age is ${age}`); //True
}
if (a == 15 && firstName == "Tobi") {
  console.log(`my name is ${firstName}  and my age is ${age}`); // False
}
if (a == 7 || a == 15 || (a == 12 && firstName == "Tobi")) {
  console.log(`my name is ${firstName}  and my age is ${age}`); //True sice the OR check one of the conditions to be true, then it will not bother to check the && operator.
}
if (firstName == "Tobi" && (a == 7 || a == 15 || a == 12)) {
  console.log(`my name is ${firstName}  and my age is ${age}`); //True sice the OR check one of the conditions to be true, then it will not bother to checkl the && operator.
} else if (a < 7) {
  console.log("if condition was not met");
} else {
  console.log("no condition was met");
}
// console.log((false && false) || true || true || true);

if (score < 40) {
  console.log("F");
} else if (score > 39 && score < 44) {
  console.log("E");
} else if (score > 44 && score < 49) {
  console.log("D");
} else if (score > 49 && score < 59) {
  console.log("C");
} else if (score > 59 && score < 69) {
  console.log("B");
} else if (score > 69 && score < 101) {
  console.log("A");
} else {
  console.log("invalid score");
}

//SWITCH STATEMENT WITH DATE & WEEKDAYS

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(daysOfWeek);
let date = new Date();
let day = date.getDay();
console.log(date.getDay());

switch (day) {
  case 0:
    console.log(daysOfWeek[day]);
    break;
  case 1:
    console.log(daysOfWeek[day]);
    break;
  case 2:
    console.log(daysOfWeek[day]);
    break;
  case 3:
    console.log(daysOfWeek[day]);
    break;
  case 4:
    console.log(daysOfWeek[day]);
    break;
  case 5:
    console.log(daysOfWeek[day]);
    break;
  case 6:
    console.log(daysOfWeek[day]);
    break;
  default:
    console.log("No case was met");
}
//Tenary Operators

day === 6 || day === 0 ? console.log("Weekend") : console.log("Weekday");
