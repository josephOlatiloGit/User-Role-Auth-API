const text = "A text from module"

const obj = {
    name: "ansb",
    age: 12
}
const newData = obj
const asghad = () => {
    console.log("Module function is running");
}

module.exports = {
    text: "A text",
    age: 20,
    afunction: () => {
        console.log("running")
    }
}

//obj //{ asghad, text }

// module.exports = text