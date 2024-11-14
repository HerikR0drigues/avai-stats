const express = require('express');
const cors = require('cors');
const standingsRoutes = require('./routes/standingsRoutes');
const statisticsRoutes = require('./routes/statisticsRoutes'); 
const playersRoutes = require('./routes/playersRoutes'); 
const lastGamesRoutes = require('./routes/lastGamesRoutes'); 
const nextGameRoutes = require('./routes/nextGameRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

// Usando as rotas com o prefixo /api
app.use('/api/standings', standingsRoutes);
app.use('/api/statistics', statisticsRoutes);
app.use('/api/players', playersRoutes);
app.use('/api/lastgames', lastGamesRoutes);
app.use('/api/nextgame', nextGameRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
