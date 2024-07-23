//ITERSTIONS//
// For Each

for (var i = 1; i < 8; i++) {
  //lopp
  console.log(i);
}

console.log("done");

/*While Loop*/

let j = 10; // While loop is concern about the condition outside. you have to declare the condition outside
while (j < 8) {
  console.log(j);
  j++; // the While loop increament must be declare inside the loop
}

let l = 67;
// while (l <= 11) {
//   console.log(l);
//   l--;
// }
// let l = 67;
// while (l > 10) {
//   console.log(l);
//   l--;
// }

do {
  console.log(l);
  l--;
} while ((l) => 11);
console.log("done");

//Continue Statement

for (var i = 1; i < 21; i++) {
  if (i % 2 != 0) {
    continue;
  }
  if (i > 10) {
    break;
  }
  console.log(i);
}
console.log("done");
