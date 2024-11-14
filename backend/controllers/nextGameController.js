const nextGameService = require('../services/nextGameService');

const getNextGame = async (req, res) => {
  try {
    const nextGame = await nextGameService.fetchNextGame();
    res.json(nextGame);
  } catch (error) {
    console.error('Error fetching next game:', error);
    res.status(500).send('Error fetching next game');
  }
};

module.exports = {
    getNextGame,
};
