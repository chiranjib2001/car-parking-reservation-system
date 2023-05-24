const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();


// Create Express app
const app = express();

// Set up session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// Set up body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
