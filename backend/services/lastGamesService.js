const axios = require('axios');

const API_URL = 'https://www.sofascore.com/api/v1/team/7315/performance';

const fetchLastGames = async () => {
  try {
    const response = await axios.get(API_URL);
    const lastGames = response.data.events;

    // Limita a 5 últimos jogos
    const lastFiveGames = lastGames.reverse().slice(0, 5).map(game => {
      // Verifica se o Avaí é o time da casa
      const isHomeTeamAvai = game.homeTeam.id === 7315;
      
      return {
        rodada: game.roundInfo.round,
        // Se o time da casa for Avaí, pega o score da casa, caso contrário pega o score de fora
        avaiScore: isHomeTeamAvai ? game.homeScore.display : game.awayScore.display,
        opponentScore: isHomeTeamAvai ? game.awayScore.display : game.homeScore.display,
        opponentId: isHomeTeamAvai ? game.awayTeam.id : game.homeTeam.id,
        opponentName: isHomeTeamAvai ? game.awayTeam.name : game.homeTeam.name,
        opponentlogoUrl: isHomeTeamAvai 
          ? `https://api.sofascore.app/api/v1/team/${game.awayTeam.id}/image`
          : `https://api.sofascore.app/api/v1/team/${game.homeTeam.id}/image`,
      };
    });

    return lastFiveGames;

  } catch (error) {
    console.error("Erro ao buscar os ultimos jogos:", error);
    throw new Error("Erro ao obter os ultimos jogos do Avaí");
  }
}

module.exports = {
    fetchLastGames,
};
