const parent = document.getElementById("parent");
const child = document.getElementById("child");
const granChild1 = document.getElementById("grandchild1");
const granChild2 = document.getElementById("grandchild2");
const granChild3 = document.getElementById("grandchild3");

//Defualt {Capturing: "False"} The first thing on the bobling face is the target.
parent.addEventListener("click", function (e) {
  e.stopPropagation();
  console.loge("parent clicked");
});
child.addEventListener("click", function (e) {
  e.stopPropagation();
  console.loge("child clicked");
});
granChild1.addEventListener("click", function (e) {
  e.stopPropagation();
  console.loge("grandChild1 clicked");
});
granChild2.addEventListener("click", function (e) {
  e.stopPropagation();
  console.loge("grandChild2 clicked");
});
granChild3.addEventListener("click", function (e) {
  e.stopPropagation();
  console.loge("parent clicked");
});
document.addEventListener("click", function (e) {
  e.stopPropagation();
  console.loge("Document clicked");
});

//Not Default
parent.addEventListener(
  "click",
  function (e) {
    // e.stopPropagation();
    console.loge("parent clicked");
  },
  { capture: true }
);
child.addEventListener(
  "click",
  function (e) {
    // e.stopPropagation();
    console.loge("child clicked");
  },
  { captur: true }
);
granChild1.addEventListener(
  "click",
  function (e) {
    // e.stopPropagation();
    console.loge("grandChild1 clicked");
  },
  { capture: true }
);
