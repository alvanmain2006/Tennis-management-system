const pool = require("../../config/db");

class PlayerRepository {
    async getAllPlayers() {
        const result = await pool.query(
                "SELECT * FROM players;"
            );

            return result.rows;
    }

    // Get player with ID using async and params

    async getPlayersByID(ID) {
        const result = await pool.query(
            "SELECT * FROM players WHERE id = $1;",
            [ID]
        );
        return result.rows[0]
    }

    // Create player
    async createPlayer(user_id) {
        const result = await pool.query(
            `INSERT INTO players (user_id)
            VALUES ($1)
            RETURNING *;`,
            [user_id]
        )

        return result.rows[0]
    }

    // get player with the user_id not player id
    async getPlayerByUserId(userId) {
        const result = await pool.query(
            "SELECT * FROM players WHERE user_id = $1;",
            [userId]
        );

        return result.rows[0];
    }
}

module.exports = new PlayerRepository();