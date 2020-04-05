const mongoose = require('mongoose');

const LoadSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  label: {
    type: String,
    required: true
  },
  howMuch: {
    type: Number,
    required: true
  },
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  },
  description: {
    type: String
  }
});

module.exports = Load = mongoose.model('load', LoadSchema);
