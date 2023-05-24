const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('home');
});

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

// Register route
router.get('/register', (req, res) => {
  res.render('register');
});

// Contact route
router.get('/contact', (req, res) => {
  res.render('contact');
});

// Request route
router.get('/request', (req, res) => {
  res.render('request');
});

// Status route
router.get('/status', (req, res) => {
  res.render('status');
});

// History route
router.get('/history', (req, res) => {
  res.render('history');
});

module.exports = router;
