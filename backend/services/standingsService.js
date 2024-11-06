const axios = require('axios');

const API_URL = 'https://www.sofascore.com/api/v1/tournament/1449/season/59015/standings/total';

const fetchStandings = async () => {

  try {
    const response = await axios.get(API_URL);

    const standings = response.data.standings[0];
    
    return standings.rows.map(row => ({
      position: row.position,
      teamId: row.team.id,
      logoUrl: `https://api.sofascore.app/api/v1/team/${row.team.id}/image`,
      teamName: row.team.name,
      matches: row.matches,
      wins: row.wins,
      draws: row.draws,
      losses: row.losses,
      points: row.points,
      scoresFor: row.scoresFor,
      scoresAgainst: row.scoresAgainst,
      scoreDiffFormatted: row.scoreDiffFormatted
    }));
  } catch (error) {
    console.error("Erro ao buscar as standings:", error);
    throw new Error("Erro ao buscar as standings");
  }

};

module.exports = {
  fetchStandings,
};
