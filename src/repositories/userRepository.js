const pool = require("../../config/db")

class userRepository {
    // Get user with id
    async getUserByID (user_id) {
        const result = await pool.query(
            "SELECT * FROM users WHERE id = $1;",
            [user_id]
        );

        return result.rows[0];
    }
}

module.exports = new userRepository();