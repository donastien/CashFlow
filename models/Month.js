const mongoose = require('mongoose');

const MonthSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  date: {
    type: Date
  },
  monthName: {
    type: String
  },
  balance: {
    type: Number,
    default: 0
  },
  pay: {
    type: Number,
    default: 0
  },
  extra: {
    type: Number,
    default: 0
  },
  expenses: [
    {
      label: {
        type: String,
        required: true
      },
      howMuch: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Month = mongoose.model('month', MonthSchema);
