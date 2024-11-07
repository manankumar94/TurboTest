import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

import speedRoutes from "./routes/speedRoutes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT ;

app.use(cors());
app.use('/api/speed', speedRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
