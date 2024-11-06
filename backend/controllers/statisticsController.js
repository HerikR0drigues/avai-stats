const statisticsService = require('../services/statisticsService');

const getStatistics = async (req, res) => {
  try {
    const statistics = await statisticsService.fetchStatistics();
    res.json(statistics);
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).send('Error fetching statistics');
  }
}

module.exports = {
  getStatistics,
};
