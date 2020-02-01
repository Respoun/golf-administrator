const express = require('express');
const router = express.Router();
const golf = require('../controllers/golf.controller');

//ROUTES CRUD GOLF
router.post('/golf', golf.create);
router.get('/golfs', golf.findAll);
router.get('/golfs/:id', golf.findOne);
// router.get('/golfs/location/:longitude', golf.findOneByLongitude)
//router.post('/golfs/:id', golf.updateOne);
router.put('/golfs/:id', golf.updateOne);
router.delete('/golfs/:id', golf.deleteOne);

module.exports = router;
