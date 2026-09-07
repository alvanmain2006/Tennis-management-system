const pool = require("../../config/db");

class PlayerRepository {
    async getAllPlayers() {
        const result = await pool.query(
                "SELECT * FROM players;"
            );

            return result.rows;
    }
}

module.exports = new PlayerRepository();