// const text = require("./module");
// const text = require("./module");

//Destructuring
// const { age: get, afunction } = require("./module");

// console.log(get)
// afunction()
// const sample = "A name";

// const obj = {
//     name: "asugs",
//     age: 13
// }

// console.log(sample);
// console.log(age);

// const { name } = obj
// console.log(name);
// console.log(text.text);
// console.log(text.afunction());
// text.afunction()


// text.asghad();

//synchronous
const fs = require("fs")
// fs.writeFileSync("../docs/data.json", `{"sample":"acdasd"}`)

try {
    // fs.writeFileSync("data.txt", "sample")
} catch (e) {
    console.log(e)
}
fs.appendFileSync("data.txt", " Extra Data")
const content = fs.readFileSync("data.txt", "utf-8") //utf-8 = encoding
console.log(content)
fs.writeFileSync("greet.txt", "Hello World!")

// Asynchronous
fs.writeFile("async.txt", "written Asynchronously", (error) => {
    if (error) {
        console.log("Failed to write file")
        return
    }
    console.log("File written successfully")
})

// fs.readFile("./aa/data.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err.message)
//         return
//     }
//     console.log(data)
// })

fs.writeFileSync("./data.json", `{"Example": "data"}`)
fs.writeFile("./greet.txt", " Hello Tobi", { flag: "a" }, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("Hello Tobi")
})
