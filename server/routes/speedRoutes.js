
const express = require('express');
const { getSpeed } = require('../controllers/speedController');
const router = express.Router();

router.get('/', getSpeed);

module.exports = router;
