const lastGamesService = require('../services/lastGamesService');

const getLastGames = async (req, res) => {
  try {
    const lastGames = await lastGamesService.fetchLastGames();
    res.json(lastGames);
  } catch (error) {
    console.error('Error fetching last games:', error);
    res.status(500).send('Error fetching last games');
  }
};

module.exports = {
  getLastGames,
};
