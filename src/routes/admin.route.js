const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin.controller');

//Routes CRUD Admins
router.post('/admin', admin.create);
router.get('/admins', admin.findAll);
router.get('/admins/:id', admin.findOne);
router.put('/admins/:id', admin.updateOne);
router.delete('/admins/:id', admin.deleteOne);

module.exports = router;
