const standingsService = require('../services/standingsService');

const getStandings = async (req, res) => {
  try {
    const teams = await standingsService.fetchStandings();
    res.json(teams);
  } catch (error) {
    console.error('Error fetching standings:', error);
    res.status(500).send('Error fetching standings');
  }
};

module.exports = {
  getStandings,
};
