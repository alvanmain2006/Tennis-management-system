const playerService = require("../service/playerService")

class playerController {
    async getAllPlayer (req, res) {
        try {
            const players = await playerService.getAllPlayers()

            res.status(200).json(players)
        } catch (error) {
            console.log(error)

            res.status(500).json({
                message: "Failed to get players"
            })
        }
    }

    // get player by id

    async getPlayerByID(req, res) {
        try {
            const id = req.params.id

            const player = await playerService.getPlayerByID(id)

            if (!player) {
                res.status(404).json({
                    message: "This Player does not exist"
                })
            }

            res.status(200).json(player)
        } catch (error) {
            console.log(error)
            
            res.status(500).json({
                message: "Failed to get player"
            })
        }
    }

    // Create player with user_id
    async createPlayer(req, res) {
        try {
            const { user_id } = req.body

            const player = await playerService.createPlayer(user_id)

            res.status(201).json(player)
        } catch (error) {
            console.log(error)

            if (error.message === "USER_ID_REQUIRED") {
                res.status(400).json({
                    message: "user_id is required"
                })
            }

            res.status(500).json({
                message: "failed to create a player"
            })
        }
    }
}

module.exports = new playerController ()
