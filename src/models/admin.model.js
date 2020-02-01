const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: 1,
    maxlength: 30
  },
  forename: {
    type: String,
    required: true,
    unique: true,
    minlength: 1,
    maxlength: 30,
    lowercase: true
  },
  role: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 250,
  },
  admin: {
      type: Boolean
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Admin', adminSchema);
