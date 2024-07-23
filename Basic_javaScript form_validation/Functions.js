//FUNCTION

function multiplyByTwo(number) {
  console.log("addTwo function running");
  console.log(number * 2);
}

function addTwoNumbers(first, second) {
  console.log("addTwo function running");
  console.log(first + second);
}
//At the end of the day, every function should return something

function calculateAge(dob) {
  const clientYob = dob.getFullYear();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let year = currentYear - clientYob;
  const month = currentDate.getMonth() - dob.getMonth();

  // console.log(currentDate.getTime()) - dob.getTime()/(365.25*24*);
  console.log(year, month);
  if (month < 0) {
    year--;
  }
  console.log(year);
  return year;
}
const as = multiplyByTwo(24);

const ans = calculateAge(new Date("1992-08-21"));
console.log(as, ans);
addTwoNumbers(23, 5);

calculateAge(new Date("1992-08-21"));

function male() {
  confirm("Are you above 18");
}

male();

// let sampleTwo = function (param) {
//   return param
// }
// const sampleTwo = function (param) {
//   return param
// }
// let sampleTwo =  (param) => {
//   return param
// }
// //if you just have one line statement
// let sampleTwo =  (param) => param //or
// let sampleTwo =  param => param
