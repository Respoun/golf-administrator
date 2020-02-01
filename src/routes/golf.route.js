const express = require('express');
const router = express.Router();
const golf = require('../controllers/golf.controller');

//CRUD GOLF
router.post('/golf', golf.create);
router.get('/golfs', golf.findAll);

module.exports = router;
