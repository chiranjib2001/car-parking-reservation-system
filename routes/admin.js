const express = require('express');
const router = express.Router();

// Admin dashboard route
router.get('/dashboard', (req, res) => {
  res.render('admin/dashboard');
});

// Available places route
router.get('/places', (req, res) => {
  res.render('admin/places');
});

// Update available places route
router.put('/places/:id', (req, res) => {
  // Logic to update available places
  res.redirect('/admin/places');
});

// Price and duration route
router.get('/price', (req, res) => {
  res.render('admin/price');
});

// Update price and duration route
router.put('/price/:id', (req, res) => {
  // Logic to update price and duration
  res.redirect('/admin/price');
});

// Service requests route
router.get('/requests', (req, res) => {
  res.render('admin/requests');
});

// Accept service request route
router.put('/requests/:id/accept', (req, res) => {
  // Logic to accept service request
  res.redirect('/admin/requests');
});

// Reject service request route
router.put('/requests/:id/reject', (req, res) => {
  // Logic to reject service request
  res.redirect('/admin/requests');
});

module.exports = router;
