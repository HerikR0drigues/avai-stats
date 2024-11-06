const axios = require('axios');

const API_URL = 'https://www.sofascore.com/api/v1/team/7315/unique-tournament/390/season/59015/statistics/overall';

const fetchStatistics = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.statistics;
  } catch (error) {
    console.error("Erro ao buscar as estatísticas:", error);
    throw new Error("Erro ao obter estatísticas do Avaí");
  }
}

module.exports = {
  fetchStatistics,
};
