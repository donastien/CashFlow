const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const path = require('path');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

var hbs = require('nodemailer-express-handlebars');
const email = process.env.MAILER_EMAIL_ID || 'isuperdeveloper@gmail.com';
const pass = process.env.MAILER_PASSWORD || 'j()@imeC0d3rDe$App';
const nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport({
  service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
  auth: {
    user: email,
    pass: pass,
  },
});

var handlebarsOptions = {
  viewEngine: {
    extName: '.html',
    partialsDir: 'routes/api/templates',
    layoutsDir: 'routes/api/templates',
    defaultLayout: 'forgot-password-email.html',
  },
  viewPath: path.resolve('./routes/api/templates/'),
  extName: '.html',
};

smtpTransport.use('compile', hbs(handlebarsOptions));

//@route   GET api/auth
//@desc    Test route
//@access  Public

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route   POST api/auth
//@desc    Authenticate user & get token
//@access  Public

router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials ' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // Return jsonwebtoken

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

//@route   POST api/auth/forgot_password
//@desc    Reset password with email
//@access  Public
router.post('/forgot_password', async (req, res) => {
  try {
    user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(400).json({ errors: [{ msg: 'User not found.' }] });
    }
    const buf = crypto.randomBytes(20);
    var token = buf.toString('hex');

    user = await User.findByIdAndUpdate(
      { _id: user._id },
      {
        reset_password_token: token,
        reset_password_expires: Date.now() + 86400000,
      },
      { upsert: true, new: true }
    );

    var data = {
      to: user.email,
      from: email,
      template: 'forgot-password-email',
      subject: 'CashFlow: Password help has arrived!',
      context: {
        url: 'https://getcashflow.io/reset_password/' + token,
        name: user.name.split(' ')[0],
      },
    };

    smtpTransport.sendMail(data);

    res.json({
      message: 'Kindly check your email for further instructions',
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route   POST api/auth/reset_password/:reset_password_token
//@desc    Reset password
//@access  Public
router.post(
  '/reset_password/:reset_password_token',

  [
    check(
      'password',
      'Please enter a password with 8 or more characters'
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { password } = req.body;

    try {
      user = await User.findOne({
        reset_password_token: req.params.reset_password_token,
        reset_password_expires: { $gt: Date.now() },
      });

      if (!user) {
        res
          .status(400)
          .json({ errors: [{ msg: 'User not found or token is not valid.' }] });
      }

      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      user.reset_password_token = undefined;
      user.reset_password_expires = undefined;

      await user.save();

      res.json('Reset Password Successful.');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
