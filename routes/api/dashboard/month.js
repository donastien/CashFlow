const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Month = require('../../../models/Month');
const User = require('../../../models/User');

// @route    POST api/dashboard/month
// @desc     Create user month
// @access   Private

router.post(
  '/',
  [
    auth,
    [
      check('date', 'Date is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { date, monthName, balance, pay, extra } = req.body;

    // Build Month Object
    const monthFields = {};
    monthFields.user = req.user.id;
    if (date) monthFields.date = date;
    if (monthName) monthFields.monthName = monthName;
    if (balance) monthFields.balance = balance;
    if (pay) monthFields.pay = pay;
    if (extra) monthFields.extra = extra;

    try {
      // Create
      month = new Month(monthFields);

      await month.save();
      res.json(month);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    PUT api/dashboard/month/:id
// @desc     Update user month
// @access   Private

router.put(
  '/:id',
  [
    auth,
    [
      check('date', 'Date is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { date, monthName, balance, pay, extra } = req.body;

    // Build Month Object
    const monthFields = {};
    monthFields.user = req.user.id;
    if (date) monthFields.date = date;
    if (monthName) monthFields.monthName = monthName;
    if (balance) monthFields.balance = balance;
    if (pay) monthFields.pay = pay;
    if (extra) monthFields.extra = extra;

    try {
      month = await Month.findById(req.params.id);

      // Check user
      if (month.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }

      // Load not found
      if (!month) {
        return res.status(400).json({ msg: 'Month not found' });
      }

      month = await Month.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: monthFields },
        { new: true }
      );

      return res.json(month);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    GET api/dashboard/month
// @desc     Get all months
// @access   Private

router.get('/', auth, async (req, res) => {
  try {
    const month = await Month.find({
      user: req.user.id
    }).populate('user', ['name', 'avatar']);

    if (!month) {
      return res.status(400).json({ msg: 'There is no month for this user' });
    }

    res.json(month);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    DELETE api/dashboard/month/:id
// @desc     Delete a month
// @access   Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const month = await Month.findById(req.params.id);

    if (!month) {
      return res.status(404).json({ msg: 'Month not found' });
    }

    // Check user
    if (month.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await month.remove();
    res.json({ msg: 'Month removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Month not found' });
    }
    res.status(500).send('Server error');
  }
});

// @route    GET api/dashboard/month/:id
// @desc     Get month by ID
// @access   Private

router.get('/:id', auth, async (req, res) => {
  try {
    const month = await Month.findById(req.params.id);

    if (!month) {
      return res.status(400).json({ msg: 'Month not found' });
    }

    // Check user
    if (month.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    res.json(month);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Month not found' });
    }
    res.status(500).send('Server error');
  }
});

// @route    PUT api/dashboard/month/expense/:id
// @desc     Add expense on a month
// @access   Private

router.put(
  '/expense/:id',
  [
    auth,
    [
      check('label', 'Label is required')
        .not()
        .notEmpty(),
      check('howMuch', 'howMuch is required')
        .not()
        .notEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { label, howMuch, date } = req.body;

    const newExpense = {
      label,
      howMuch,
      date
    };
    try {
      const month = await Month.findById(req.params.id);

      if (!month) {
        return res.status(400).json({ msg: 'Month not found' });
      }

      // Check user
      if (month.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }

      month.expenses.unshift(newExpense);

      await month.save();

      res.json(month.expenses);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    DELETE api/dashboard/month/:id/:exp_id
// @desc     Delete expense on a month
// @access   Private

router.delete('/:id/:exp_id', auth, async (req, res) => {
  try {
    const month = await Month.findById(req.params.id);

    // Pull out expense
    const expense = month.expenses.find(
      expense => expense.id === req.params.exp_id
    );

    // Make sure expense exists
    if (!expense) {
      return res.status(404).json({ msg: 'Expense does not exist' });
    }

    // Check user
    if (month.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    // Get remove index
    const removeIndex = month.expenses
      .map(item => item.id)
      .indexOf(req.params.exp_id);

    month.expenses.splice(removeIndex, 1);

    await month.save();

    res.json(month.expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
