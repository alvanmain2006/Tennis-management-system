const express = require("express") //importing express

const app = express() //using the express function

// Middleware
app.use(express.json()); //parse json file

// Temporary route
app.get("/", (req, res) => {
  res.send("Tennis Tournament Management API is running...");
});

app.post("/", (req, res) => {
  const { name, location } = req.body
  res.status(200).send({
      message: `YOUR KEYS WERE ${name}, ${location}`
  })
})

module.exports = app;
