const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Month = require('../../../models/Month');
const User = require('../../../models/User');
const Load = require('../../../models/Load');

// @route    DELETE api/dashboard/delete
// @desc     Delete dashboard & user
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user loads
    await Load.deleteMany({ user: req.user.id });
    // Remove month
    await Month.deleteMany({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
