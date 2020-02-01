const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin.controller');

//Routes CRUD Managers
router.post('/admin', admin.create);
router.get('/admins', admin.findAll);
// router.get('/managers/:id', manager.findOne);
// router.put('/managers/:id', manager.updateOne);
// router.delete('/managers/:id', manager.deleteOne);

module.exports = router;
