const Manager = require('../models/manager.model');

exports.create = (req, res) => {
  const manager = new Manager({
    name: req.body.name,
    forename: req.body.forename,
    mail: req.body.mail,
    phone: req.body.phone,
  })
  manager.save()
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}

exports.findAll = (req, res) => {
  Manager.find()
  .then(managers => {
    res.send(managers);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occured when finding Managers."
    })
  })
}
