const express = require("express")
const playerController = require("../controllers/playerController")

const router = express.Router()

router.get("/", (req, res) => {
    playerController.getAllPlayer(req, res)
})

router.get("/:id", (req, res) => {
    playerController.getPlayerByID(req, res)
})

router.post("/", (req, res) => {
    playerController.createPlayer(req, res)
})

module.exports = router;
