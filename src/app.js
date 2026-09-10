const express = require("express") //importing express
const playerRoutes = require("./routes/playerRoute")
const userRoutes = require("./routes/userRoute")
const app = express() //using the express function

// Middleware
app.use(express.json()); //parse json file
app.use("/players", playerRoutes)
app.use("/users", userRoutes)


// Temporary route
app.get("/", (req, res) => {
  res.send("Tennis Tournament Management API is running...");
});


module.exports = app;
