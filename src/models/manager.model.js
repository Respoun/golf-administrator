const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const managerSchema = new Schema({
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
  mail: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Manager', managerSchema);
