const express = require('express');
const { getPlayers } = require('../controllers/playersController');
const router = express.Router();

router.get('/', getPlayers);

module.exports = router;
