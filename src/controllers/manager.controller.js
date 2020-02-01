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

exports.findOne = (req, res) => {
  console.log(req.params);
  Manager.findById(req.params.id)
  .then(manager => {
    if (!manager) {
      return res.status(404).send({
        message: "Manager not found with id" + req.params.id
      });
    }
    res.send(manager);
  })
  .catch(err => {
    return res.status(500).send({
      message: err.message
    })
  })
}

exports.updateOne = (req, res) => {
  Manager.findByIdAndUpdate(
    req.params.id,
    req.body
  ).then(manager => {
    if (!manager) {
      return res.status(404).send({
        message: "Manager not found"
      })
    }

    Manager.findById(req.params.id)
    .then(newManager => {
      res.send({
        new_user: newManager,
        old_user: manager
      });
    })
  }).catch(err => {
    return res.status(500).send({
      message: err.message
    })
  })
}

exports.deleteOne = (req, res) => {
  Manager.findByIdAndRemove(req.params.id)
  .then(manager => {
    if (!manager) {
      return res.status(404).send({
        message: "Manager not found"
      })
    }
    res.send({
      message: `Manager with id ${req.params.id} deleted successfully`
    })
  })
}

exports.removeAll = (req, res) => {
  Manager.deleteMany((err) => {
    if (err) {
      res.send(err)
    }
    res.send('All Managers removed');
  });
}
