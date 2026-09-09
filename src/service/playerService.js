const playerRepository = require("../repositories/playerRepositories");
const userRepository = require("../repositories/userRepository")
class PlayerService {
    async getAllPlayers () {
        const players = await playerRepository.getAllPlayers();

        return players;
    }
    
    // Get player with id 
    async getPlayerByID(userID) {
        const player = await playerRepository.getPlayersByID(userID)
        if (!player) {
            return null
        }
        return player
    }

    //Create Player with id
    async createPlayer(id) {
        if (!id) {
            throw new Error("id_REQUIRED");
        }

        const user = await userRepository.getUserByID(id)

        if (!user) {
            throw new Error("USER_NOT_FOUND")
        }

        const existingPlayer = await playerRepository.getPlayerByID(id)

        if (existingPlayer) {
            throw new Error("PLAYER_ALREADY_EXISTS");
        }

        const player = await playerRepository.createPlayer(id)

        return player
    }


    //update rating with id
    async updatePlayerRating(id, rating) {
        console.log("ID RECEIVED:", id);
        if (rating === undefined) {
            throw new Error("RATING_REQUIRED");
        }

        const player = await playerRepository.getPlayerByID(id);

        console.log("PLAYER FOUND:", player);

        if (!player) {
            throw new Error("PLAYER_NOT_FOUND");
        }

        const updatedPlayer = await playerRepository.updatePlayerRating(id, rating);

        return updatedPlayer;
    }

}

module.exports = new PlayerService()