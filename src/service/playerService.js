const playerRepository = require("../repositories/playerRepositories");
class PlayerService {
    async getAllPlayers () {
        const players = await playerRepository.getAllPlayers();

        return players;
    }
    
    // Get player with id 
    async getPlayerByID(id) {
        const player = await playerRepository.getPlayersByID(id)
        if (!player) {
            return null
        }
        return player
    }

    //Create Player with user_id
    async createPlayer(user_id) {
        if (!user_id) {
            throw new Error("USER_ID_REQUIRED");
        }
        const player = await playerRepository.createPlayer(user_id)

        return player
    }


}

module.exports = new PlayerService()