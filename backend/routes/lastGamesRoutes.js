const express = require('express');
const { getLastGames } = require('../controllers/lastGamesController');
const router = express.Router();

router.get('/', getLastGames);

module.exports = router;
