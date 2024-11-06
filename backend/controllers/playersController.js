const playersService = require('../services/playersService');

const getPlayers = async (req, res) => {
  try {
    const players = await playersService.fetchPlayers();
    res.json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).send('Error fetching players');
  }
};

module.exports = {
  getPlayers,
};
