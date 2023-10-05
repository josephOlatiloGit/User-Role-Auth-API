const http = require("http")
const { url } = require("inspector")

const app = http.createServer((req, res) => {
    if (req.url == "/login" && req.method == "GET") {
        res.write("Login Page")
        return res.end()
    }
    if (req.url == "/login" && req.method == "POST") {
        req.body
        res.write("Login Successfilly")
        return res.end()
    }
    console.log(req.method)
    res.write("404 Page Not Found")
    res.end();

}).listen(8000, (err) => {
    console.log("started")
});