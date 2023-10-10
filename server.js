//INSTALL ALL DEPENDENCIES:
const express = require("express")
const cors = require("cors")
const { validatePassword, encryptPassword, comparePassword } = require("./passwordUtil")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")



const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser("secret"))

async function connectDb() {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/testDB")
        // console.log(connection)
        console.log("Data Base Connected Successfilly")
    } catch (error) {
        console.log(error)
    }
}

//User Authentication Function or Method:
const authenticateUser = async (req) => {
    const cookies = req.cookies
    console.log("cookies", cookies)
    const cookieUser = cookies.user
    if (!cookieUser) {
        return { "msg": "Unauthorized", "valid": false }
    }

    const cookieEmail = cookieUser.email
    const dbUser = await Users.findOne({ email: cookieEmail, "deleted": false })
    if (!dbUser) {
        return { "msg": "Unauthorized", "valid": false }
    }
    return { "valid": true, "msg": "Valid" }

}
//Admin Authentication
const authenticateAdmin = async (req) => {
    const cookies = req.cookies
    console.log("cookies", cookies)
    const cookieUser = cookies.user
    if (!cookieUser) {
        return { "msg": "Unauthorized", "valid": false }
    }

    const cookieEmail = cookieUser.email
    const dbUser = await Users.findOne({ email: cookieEmail, "deleted": false })
    if (!dbUser) {
        return { "msg": "Unauthorized", "valid": false }
    }

    if (dbUser.role != "ADMIN") {
        return { "msg": "Unauthorized", "valid": false }
    }

    return { "valid": true, "msg": "Valid" }

}


// function connectDb() {
//     mongoose.connect("/localhost:207017/testDB.users")
//         .then(connection => {
//             console.log(connection)
//         })
//         .catch((e) => {
//             console.log(e)
//         })
// }

const userSchema = mongoose.Schema({
    id: { type: Number, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    deleted: { type: Boolean, required: true, default: false },
    role: { type: String, required: true, default: "USER" }
    // createdAt: {type:Date, default: new Date()},
    // updatedAt: {type:Date, default: new Date()}
}, { timestamps: true })

const Users = mongoose.model("users", userSchema)

connectDb()



//FIND EMAIL 
const doesEmailExist = async (email, id) => {
    const findByEmail = await Users.findOne({ "email": email })
    if (findByEmail != null && findByEmail.id != id) {
        return true;
    }
    return false
}

function validateEmail(email) {
    const mail = email
    if (!mail.match(/^[a-zA-Z][a-zA-Z0-9\.\-_]+@[a-z]+\.[a-z]{2,5}$/)) {
        return false
    }
    return true;
}

const testusers = [
    { email: "joseph@gmail.com", password: "123456789", firstname: "Joseph", lastname: "Don", id: "1" },
    { email: "Moses@gmail.com", password: "abcdefgh", firstname: "Moses", lastname: "Kay", id: "2" }
]
//APPLICATION END POINTS:

app.get("/", (req, res) => {
    return res.send("Homepage")
})


//TO POST OR REGISTER A USER:
app.post("/register", async (req, res) => {
    const { firstname, lastname, password, email } = req.body;
    console.log(firstname, lastname, password, email)
    if (!firstname || !lastname || !password || !email) {
        return res.status(400).send({ "msg": "Missing Required fields to Register" })
    }
    //TO VALIDATE NEW EMAIL & PASWORD:

    const validPassword = validatePassword(password);
    if (!validPassword.valid) {
        return res.status(400).send({ "msg": validPassword.msg });
    }

    const validEmail = validateEmail(email);
    if (!validEmail) {
        return res.status(400).send({ "msg": "Invalid Email" });
    }
    //TO CHECK IF THE NEW EMAIL & ID ALREADY IN USE: 
    const emailExist = await doesEmailExist(email, id)
    if (emailExist) {
        return res.send({ "msg": "Email Aready In Use" })
    }
    //TO INCREASE THE ID NUMBER COUNT FOR NEW USER ENTRY:
    let id = await Users.count() + 1
    //REQUIRED BODY OF EVERY USER ENTRY 
    const user = {
        email: email,
        password: encryptPassword(password),
        firstname: firstname,
        lastname: lastname,
        role: req.body.role,
        id: id
    }
    //TO CREATE NEW USER ENTRY:
    try {
        const entry = await Users.create(user)
        console.log(entry)
        return res.send({ "msg": "Registered successfully", user })
    } catch (e) {
        console.log(e.msg)
        return res.status(500).send({ "msg": "Failed to Save User" })
    }

    // 2 or Users.create(user, (err, data) => {
    //     if (err) {

    //     }

    // })

    // 3. const b = new Users(user)
    // b.save

})

//TO POST LOGIN THROUGH REQUEST BODY:
app.post("/login", async (req, res) => {
    const { password, login } = req.body
    console.log(req.body)
    if (!password || !login) {
        return res.status(400).send({ "msg": "Missing Required fields to login" })
    }
    const user = await Users.findOne({ "email": login, "deleted": false })
    if (!user) {
        return res.status(404).send({ "msg": "user not found" })
    }
    if (!comparePassword(password, user.password)) {
        return res.status(401).send({ "msg": "Invalid Username or Password" })
    }
    res.cookie("user", user, {
        maxAge: 1000 * 60
    })
    return res.send({ "msg": "Login successful" })
})

//TO FIND ALL USERS THROUGH HTTP// QUERY PARAMS:
app.get("/users/search", async (req, res) => {
    console.log(req.query)
    const { firstname, lastname } = req.query
    console.log(firstname, lastname)
    try {
        const users = await Users.find({ "firstname": firstname, "lastname": lastname, "deleted": false })
        console.log(users)
        if (users.length < 1) {
            return res.status(404).send({ "msg": "user not found" })
        }
        return res.send(users)
    } catch (e) {
        console.log(e)
        return res.status(500).send({ "msg": "Something Went Wrong" })
    }
})

//TO GET A USER LOGIN DETAILS THROUGH QUERY PARAMS:
app.get("/login/search", (req, res) => {
    console.log(req.query)
    const { email, password } = req.query
    console.log(email, password)
    if (!email || !password || email.match(/^[ ]+$/) || password.match(/^[ ]+$/)) {
        return res.status(400).send({ "msg": " Search Params Require" })
    }
    let dbLogin;
    for (i = 0; i < testusers.length; i++) {
        const currentLogin = testusers[i]
        if (currentLogin.email == email && currentLogin.password == password) {
            dbLogin = currentLogin
            break
        }
    }
    if (!dbLogin) {
        return res.status(404).send({ "msg": "email or password does not match existing account" })
    }
    return res.send({ "msg": "Login Post Successful", "currentUser": dbLogin })
})

//TO FIND ALL USERS:
app.get("/users", async (req, res) => {
    try {
        const users = await Users.find({ "deleted": false })
        console.log(users)
        return res.send(users)
    } catch (e) {
        console.log(e)
        return res.status(500).send({ "msg": "Something Went Wrong" })
    }

})

//TO GET USER BY ID:
app.get("/users/:id", async (req, res) => {
    const authenticated = await authenticateUser(req)
    if (!authenticated.valid) {
        return res.status(401).send(authenticateUser.msg)
    }

    const { id } = req.params
    try {
        const user = await Users.findOne({ "id": id, "deleted": false })
        console.log(user)
        if (user == null) {
            return res.status(404).send({ "msg": "User Not Found" })
        }
        return res.send({ user })
    } catch (e) {
        console.log(e)
        return res.status(500).send("Something Went Wrong")
    }
})

//TO UPDATE USER INFO:
app.put("/user/update", async (req, res) => {

    try {
        const { id, firstname, lastname, email } = req.body
        console.log(req.body)
        let user = await Users.findOne({ "id": id, "deleted": false })
        console.log(user)
        if (user == null) {
            return res.status(404).send({ "msg": "User Not Found" })
        }

        const findByEmail = await Users.findOne({ "email": email })
        if (findByEmail != null && findByEmail.id != id) {
            if (findByEmail.id != id) {
                return res.send({ "msg": "Email already in use" })
            }
        }

        const validEmail = validateEmail(email);
        if (!validEmail) {
            return res.status(400).send({ "msg": "Invalid Email" });
        }

        const emailExist = await doesEmailExist(email, id)
        if (emailExist) {
            return res.send({ "msg": "Email Aready In Use" })
        }
        user.firstname = firstname
        user.lastname = lastname
        user.email = email
        user.save()
        return res.send("Successfull")

    } catch (e) {
        console.log(e)
        return res.status(500).send("Something Went Wrong")
    }

})

//To Delete User By ID:
app.delete("/user/:id", async (req, res) => {

    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).send("Invalid UserId")
        }
        const authenticated = await authenticateUser(req)
        if (!authenticated.valid) {
            return res.status(401).send(authenticateUser.msg)
        }
        const user = await Users.findOne({ "id": id })
        console.log(user)
        if (!user) {
            return res.status(404).send("User Not Found")
        }
        user.deleted = true
        user.save()
        return res.send("Deleted Successfully")
    } catch (e) {
        console.log(e)
        return res.status(500).send({ "msg": " Something Went Wrong" })
    }

}
)


//To Post Delete All Users:
app.post("/users/delete", async (req, res) => {
    try {
        const authenticated = await authenticateUser(req)
        if (!authenticated.valid) {
            return res.status(401).send(authenticateUser.msg)
        }
        const { deleted } = req.body
        if (deleted != true && deleted != false) {
            return res.send("Missing Parameter")
        }
        const users = await Users.find()
        users.forEach(user => {
            console.log(user.id)
            user.deleted = deleted
            user.save()
        });
        res.send("Successful")
    } catch (error) {
        return res.status(404).send("something went wrong")

    }

})

//To Give each User Role:
app.post("/users/roles", async (req, res) => {
    try {
        const authenticatedAdmin = await authenticateAdmin(req)
        if (!authenticateAdmin.valid) {
            return res.status(401).send(authenticateAdmin.msg)
        }

        const { role } = req.body
        if (role != "USER" && role != "ADMIN") {
            return res.send("Missing Parameter")
        }
        const users = await Users.find()
        users.forEach(user => {
            user.role = role
            user.save()
        });
        res.send("Successful")
    } catch (error) {
        return res.status(404).send("something went wrong")

    }
})

// User Logout with Cookie time-out/expire:
app.post("/logout", async (req, res) => {

    try {
        const authenticated = await authenticateUser(req)
        if (!authenticated.valid) {
            return res.status(401).send(authenticated.msg)
        }
        const cookies = req.cookies
        const userCookie = cookies.user
        res.cookie("user", userCookie, {
            maxAge: 1
        })

        return res.send({ "msg": "Successful" })

    } catch (e) {
        return res.send("something went wrong")
    }

})


//* means any 
app.use("/*", (req, res) => {
    return res.status(404).send("Not Found")
})



app.listen(7000, (err) => {
    if (err) {
        console.log("Failed to start Server")
        return
    }
    console.log("Application Listening on Port 7000")
})

// app.post("/login", (req, res) => {
//     console.log(req.body)
//     const { login, password } = req.body
//     let authenticated = false
//     for (let i = 0; i < testusers.length; i++) {
//         const user = testusers[i];
//         if (user.login === login && user.password === password) {
//             authenticated = true
//             break;
//         }
//     }
//     if (authenticated == false) {
//         return res.status(401).send("Invalid Email or Password")
//     }
//     return res.send({ "msg": "Post Successfully" })
// })