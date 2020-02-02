const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');


exports.create = (req, res) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, 8);
  console.log(hashedPassword);
  const admin = new Admin({
    name: req.body.name,
    forename: req.body.forename,
    role: req.body.role,
    mail: req.body.mail,
    password: hashedPassword,
    admin: req.body.admin
  })
  admin.save()
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}

exports.findAll = (req, res) => {
  Admin.find()
  .then(admin => {
    res.send(
      admin
    );
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occured when finding Admins."
    })
  })
}

exports.findOne = (req, res) => {
  console.log(req.params);
  Admin.findById(req.params.id)
  .then(admin => {
    if (!admin) {
      return res.status(404).send({
        message: "Admin not found with id" + req.params.id
      });
    }
    res.send(admin);
  })
  .catch(err => {
    return res.status(500).send({
      message: err.message
    })
  })
}

exports.updateOne = (req, res) => {
  Admin.findByIdAndUpdate(
    req.params.id,
    req.body
  ).then(admin => {
    if (!admin) {
      return res.status(404).send({
        message: "Manager not found"
      })
    }

    Admin.findById(req.params.id)
    .then(newAdmin => {
      res.send({
        new_user: newAdmin,
        old_user: admin
      });
    })
  }).catch(err => {
    return res.status(500).send({
      message: err.message
    })
  })
}

exports.deleteOne = (req, res) => {
  Admin.findByIdAndRemove(req.params.id)
  .then(manager => {
    if (!manager) {
      return res.status(404).send({
        message: "Admin not found"
      })
    }
    res.send({
      message: `Admin with id ${req.params.id} deleted successfully`
    })
  })
}

exports.removeAll = (req, res) => {
  Admin.deleteMany((err) => {
    if (err) {
      res.send(err)
    }
    res.send('All Admins removed');
  });
}
