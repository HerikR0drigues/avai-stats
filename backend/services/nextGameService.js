const axios = require('axios');

const API_URL = 'https://www.sofascore.com/api/v1/team/7315/events/next/0';

const fetchNextGame = async () => {
  try {

    const response = await axios.get(API_URL);
    const nextGames = response.data.events;

    //Faz busca dos proximos jogos do avai, pega especificamente o proximo jogo (precisamos do ID de partida)
    const nextGame = nextGames.slice(0, 1).map(game => {
      return {
        matchDetailId: game.id,
        matchDetailUrl: `https://www.sofascore.com/api/v1/event/${game.id}`
      };
    });

    // Com o ID de partida vamos pegar as informacoes da partida
    const responseMatchDetail = await axios.get(nextGame[0].matchDetailUrl);
    const matchDetails = responseMatchDetail.data.event;
    
    // Converter startTimestamp para BRT (horario do jogo com data e horario)
    const timestamp = matchDetails.startTimestamp;
    const date = new Date(timestamp * 1000);
    const brtDate = date.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
    const brtTime = date.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" });

    // Demais informacoes
    const matchDetail = {
        round: matchDetails.roundInfo.round,
        homeTeamName: matchDetails.homeTeam.name,
        homeTeamId: matchDetails.homeTeam.id,
        homeTeamLogoUrl: `https://api.sofascore.app/api/v1/team/${matchDetails.homeTeam.id}/image`,
        awayTeamName: matchDetails.awayTeam.name,
        awayTeamId: matchDetails.awayTeam.id,
        awayTeamLogoUrl: `https://api.sofascore.app/api/v1/team/${matchDetails.awayTeam.id}/image`,
        stadium: matchDetails.venue.stadium.name,
        city: matchDetails.venue.city.name,
        matchDate: brtDate,
        matchTime: brtTime
    };

    return matchDetail;

  } catch (error) {
    console.error("Erro ao buscar o proximo jogo:", error);
    throw new Error("Erro ao obter o proximo jogo");
  }
};

module.exports = {
  fetchNextGame,
};
