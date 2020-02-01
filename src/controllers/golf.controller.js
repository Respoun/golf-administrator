const Golf = require('../models/golf.model');

exports.create = (req, res) => {
  const golf = new Golf({
    titre: req.body.titre,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.description,
    manager: req.body.manager
  })
  golf.save()
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}

exports.findAll = (req, res) => {
  Golf.find()
  .then(golfs => {
    res.send(golfs);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occured when finding Golfs."
    })
  })
}
