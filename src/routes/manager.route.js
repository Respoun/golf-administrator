const express = require('express');
const router = express.Router();
const manager = require('../controllers/manager.controller');

//CRUD GOLF
router.post('/manager', manager.create);
router.get('/managers', manager.findAll);

module.exports = router;
