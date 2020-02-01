const express = require('express');
const router = express.Router();
const golfRouter = require('./golf.route');

router.use(golfRouter);

module.exports = router;
