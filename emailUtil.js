//METHOD TO FIND IF NEW EMAIL ALREADY EXIST OR IN USE

const doesEmailExist = async (email) => {
    const findByEmail = await Users.findOne({ "email": email })
    //IF THE NEW EMAIL DOES NOT MATCH ANY EXISTING EMAIL && THE NEW EMAIL IS NOT ASSOCIATED TO THE CURRENT USERS ID (Accept)
    if (findByEmail != null && findByEmail.id != id) {
        return true;
    }
    return false
}

module.exports = { doesEmailExist }