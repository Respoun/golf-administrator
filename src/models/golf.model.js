const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const golfSchema = new Schema({
  titre: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  latitude: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 10
  },
  longitude: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 10
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 350
  },
  manager: {
    type: String
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Golf', golfSchema);
