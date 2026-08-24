require("dotenv").config();
const pool = require("../config/db")
const app = require("./app");

const PORT = process.env.PORT || 5000;



async function startServer() {
    try {
        const result = await pool.query("SELECT NOW();")
        console.log(result.rows);
        console.log("DB is connected to Postgrest")

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