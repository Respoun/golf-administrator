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
    // get all users
exports.findAll = (req, res) => {
    Admin.find()
        .then(admin => {
            res.send(admin);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding Admins."
            })
        })
}
