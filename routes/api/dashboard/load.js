const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Month = require('../../../models/Month');
const User = require('../../../models/User');
const Load = require('../../../models/Load');

// @route    POST api/dashboard/load
// @desc     Create user load
// @access   Private

router.post(
  '/',
  [
    auth,
    [
      check('label', 'Label is required')
        .not()
        .isEmpty(),
      check('howMuch', 'howMuch is required')
        .not()
        .isEmpty(),
      check('from', 'From is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { label, howMuch, from, to, current, description } = req.body;

    // Build Load Object
    const loadFields = {};
    loadFields.user = req.user.id;
    if (label) loadFields.label = label;
    if (howMuch) loadFields.howMuch = howMuch;
    if (from) loadFields.from = from;
    if (to) loadFields.to = to;
    if (current) loadFields.current = current;
    if (description) loadFields.description = description;

    try {
      // Create
      load = new Load(loadFields);

      await load.save();
      res.json(load);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    DELETE api/dashboard/load/:id
// @desc     DELETE user load
// @access   Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const load = await Load.findById(req.params.id);

    if (!load) {
      return res.status(404).json({ msg: 'Load not found' });
    }

    // Check user
    if (load.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await load.remove();
    res.json({ msg: 'Load removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Load not found' });
    }
    res.status(500).send('Server error');
  }
});

// @route    PUT api/dashboard/load/:id
// @desc     PUT user load
// @access   Private

router.put(
  '/:id',
  [
    auth,
    [
      check('label', 'Label is required')
        .not()
        .isEmpty(),
      check('howMuch', 'howMuch is required')
        .not()
        .isEmpty(),
      check('from', 'From is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { label, howMuch, from, to, current, description } = req.body;

    // Build Load Object
    const loadFields = {};
    loadFields.user = req.user.id;
    if (label) loadFields.label = label;
    if (howMuch) loadFields.howMuch = howMuch;
    if (from) loadFields.from = from;
    if (to) loadFields.to = to;
    if (current) loadFields.current = current;
    if (description) loadFields.description = description;

    try {
      load = await Load.findById(req.params.id);

      // Check user
      if (load.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }

      // Load not found
      if (!load) {
        return res.status(400).json({ msg: 'Load not found' });
      }

      load = await Load.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: loadFields },
        { new: true }
      );

      return res.json(load);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    GET api/dashboard/load
// @desc     Get all load
// @access   Private

router.get('/', auth, async (req, res) => {
  try {
    const load = await Load.find({
      user: req.user.id
    });

    if (!load) {
      return res.status(400).json({ msg: 'There is no load for this user' });
    }
    res.json(load);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

// @route    GET api/dashboard/load/:id
// @desc     Get load by ID
// @access   Private

router.get('/:id', auth, async (req, res) => {
  try {
    const load = await Load.findById(req.params.id);

    if (!load) {
      return res.status(400).json({ msg: 'Load not found' });
    }

    // Check user
    if (load.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    res.json(load);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Load not found' });
    }
    res.status(500).send('Server error');
  }
});
