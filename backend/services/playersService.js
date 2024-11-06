const axios = require('axios');

const API_URL = 'https://www.sofascore.com/api/v1/team/7315/players';

const fetchPlayers = async () => {

  try {
    const response = await axios.get('API_URL', {
      headers: {
        'User-Agent': 'axios/1.7.7',  // Ou qualquer outro User-Agent que funcione no seu localhost
        'Accept': 'application/json',
      }
    });
    

    const players = response.data.players; 

    return players.map(playerData => {
      const player = playerData.player;
      return {
        name: player.name,
        jerseyNumber: player.jerseyNumber,
        position: player.position,
        pictureURL: `https://api.sofascore.app/api/v1/player/${player.id}/image`
      };
    });
    
  } catch (error) {
    console.error("Erro ao buscar os jogadores do Avai......:", error);
    throw new Error("Erro ao buscar os jogadores do Avai......");
  }
};

module.exports = {
  fetchPlayers,
};
