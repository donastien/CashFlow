const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  reset_password_token: {
    type: String,
  },
  reset_password_expires: {
    type: Date,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
