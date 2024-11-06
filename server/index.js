const express = require('express');
const cors = require('cors');
const speedRoutes = require('./routes/speedRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api/speed', speedRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
