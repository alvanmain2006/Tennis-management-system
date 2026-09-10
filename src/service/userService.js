const bcrypt = require("bcryptjs")
const userRepository = require("../repositories/userRepository")

class userService {

    // Create user
    async registerUser(name, username, email, password, role) {
        if (!name || !username || !email || !password || !role) {
            throw new Error("MISSING_REQUIRED_FIELDS");
        }

        const passHash = await bcrypt.hash(password, 10)

        const user = await userRepository.createUser(
            name, username, email, passHash, role
        )
        return user
    }
 }  

module.exports = new userService()