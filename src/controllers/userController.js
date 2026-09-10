const userService = require("../service/userService")

class userController {
    // registerUser

    async registerUser (req, res) {
        try {
            const {
                name,
                username,
                email,
                password,
                role
            } = req.body;

            const user = await userService.registerUser(name, username, email, password, role)

            return res.status(201).json({
                user
            })
        } catch (error) {
            console.log(error)

            if (error.message === "MISSING_REQUIRED_FIELDS") {
                return res.status(400).json({
                    message: "All fields are required"
                });
            }

            if (error.message === "EMAIL_ALREADY_EXISTS") {
                return res.status(409).json({
                    message: "Email already exists"
                });
            }

            if (error.message === "USERNAME_ALREADY_EXISTS") {
                return res.status(409).json({
                    message: "Username already exists"
                });
            }

            return res.status(500).json({
                message: "Failed to register user"
            });
        }
    }
}
module.exports = new userController()