const express = require('express');
const cors = require('cors');
const standingsRoutes = require('./routes/standingsRoutes');
const statisticsRoutes = require('./routes/statisticsRoutes'); 
const playersRoutes = require('./routes/playersRoutes'); 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); 

// Usando as rotas com o prefixo /api
app.use('/api/standings', standingsRoutes);
app.use('/api/statistics', statisticsRoutes);
app.use('/api/players', playersRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
