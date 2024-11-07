import express from "express";
import SpeedTestController from '../controllers/speedController.js';

const router = express.Router();

router.get('/', SpeedTestController.getSpeed);

 export default router;
