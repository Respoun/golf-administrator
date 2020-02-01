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

exports.findOne = (req, res) => {
  console.log(req.params);
  Golf.findById(req.params.id)
  .then(golf => {
    if (!golf) {
      return res.status(404).send({
        message: "Golf not found with id" + req.params.id
      });
    }
    res.send(golf);
  })
  .catch(err => {
    return res.status(500).send({
      message: err.message
    })
  })
}

exports.updateOne = (req, res) => {
  Golf.findByIdAndUpdate(
    req.params.id,
    req.body
  ).then(golf => {
    if (!golf) {
      return res.status(404).send({
        message: "Golf not found"
      })
    }

    Golf.findById(req.params.id)
    .then(newGolf => {
      res.send({
        new_user: newGolf,
        old_user: golf
      });
    })
  }).catch(err => {
    return res.status(500).send({
      message: err.message
    })
  })
}

exports.deleteOne = (req, res) => {
  Golf.findByIdAndRemove(req.params.id)
  .then(golf => {
    if (!golf) {
      return res.status(404).send({
        message: "Golf not found"
      })
    }
    res.send({
      message: `Golf with id ${req.params.id} deleted successfully`
    })
  })
}

exports.removeAll = (req, res) => {
  Golf.deleteMany((err) => {
    if (err) {
      res.send(err)
    }
    res.send('All Golfs removed');
  });
}

// exports.findOneByLongitude = (req, res) => {
//     console.log(req.params);
//     Golf.findOne(req.params.longitude)
//         .then(golf => {
//             if (!golf) {
//                 return res.status(404).send({
//                     message: "Golf not found with longitude:" + req.params.longitude
//                 });
//             }
//             res.send(golf);
//         })
//         .catch(err => {
//             return res.status(500).send({
//                 message: err.message
//             })
//         })
// }
