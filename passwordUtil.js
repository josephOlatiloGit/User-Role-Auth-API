const bcrypt = require("bcrypt")

function validatePassword(value) {
    let pword = value;
    if (pword.length < 8) {
        return { valid: false, msg: " Password Must be more than 7 characters" };
    }

    if (pword.match(/["'():<>\[\]^`{-~]/)) {
        return { valid: false, msg: " Password Must contain valid character" };
    }

    if (!pword.match(/[A-Z]/)) {
        return { valid: false, msg: " Password Must contain one upper case character" };
    }

    if (!pword.match(/[a-z]/)) {
        return { valid: false, msg: " Password Must contain a lower case character" };
    }

    if (!pword.match(/[0-9]/)) {
        return { valid: false, msg: "Password Must contain a number" };
    }

    if (!pword.match(/[_\\?@=;*-/! #-&]/)) {
        return { valid: false, msg: "Password is missing one special character" };
    }

    return { valid: true, msg: "Valid" };
}

function encryptPassword(password) {
    const encryptPassword = bcrypt.hashSync(password, 10)
    return encryptPassword;
}

function comparePassword(rawPassword, hashedPassword) {
    return bcrypt.compareSync(rawPassword, hashedPassword)
}

module.exports =
{
    validatePassword: validatePassword,
    encryptPassword: encryptPassword,
    comparePassword: comparePassword
}