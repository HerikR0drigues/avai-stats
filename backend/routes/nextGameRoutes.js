const express = require('express');
const { getNextGame } = require('../controllers/nextGameController');
const router = express.Router();

router.get('/', getNextGame);

module.exports = router;
