require("dotenv").config();
const pool = require("../config/db")
const app = require("./app");
const playerService = require("./service/playerService")

const PORT = process.env.PORT || 5000;



async function startServer() {
    try {
        await pool.query("SELECT NOW();")
        console.log("DB is connected to PostgreSQL");

        const players = await playerService.getAllPlayers()
        console.log("Players:", players);

        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

    } catch(error) {
        console.error("❌ Failed to connect to PostgreSQL");
        console.error(error);

        process.exit(1);
    }

}

startServer()