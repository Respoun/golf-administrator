const express = require('express');
const router = express.Router();
const manager = require('../controllers/manager.controller');

//Routes CRUD Managers
router.post('/manager', manager.create);
router.get('/managers', manager.findAll);
router.get('/managers/:id', manager.findOne);
router.put('/managers/:id', manager.updateOne);
router.delete('/managers/:id', manager.deleteOne);

module.exports = router;
