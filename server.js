const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/dashboard/month', require('./routes/api/dashboard/month'));
app.use('/api/dashboard/delete', require('./routes/api/dashboard/delete'));
app.use('/api/dashboard/load', require('./routes/api/dashboard/load'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

  app.use(function (req, resp, next) {
    if (req.headers['x-forwarded-proto'] == 'http') {
      return resp.redirect(301, 'https://' + req.headers.host + '/');
    } else {
      return next();
    }
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
