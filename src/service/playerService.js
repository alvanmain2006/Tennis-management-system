const playerRepository = require("../repositories/playerRepositories");
class PlayerService {
    async getAllPlayers () {
        const players = await playerRepository.getAllPlayers();

        return players;
    }
    
}

module.exports = new PlayerService()