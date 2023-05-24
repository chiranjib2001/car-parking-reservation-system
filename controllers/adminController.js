const db = require('../config/database');
const Request = require('../models/request');

// Get all requests controller
exports.getAllRequests = async (req, res) => {
  try {
    // Fetch all requests
    const requests = await Request.findAll();

    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get accepted requests controller
exports.getAcceptedRequests = async (req, res) => {
  try {
    // Fetch accepted requests
    const requests = await Request.findAll({ where: { status: 'accepted' } });

    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Accept request controller
exports.acceptRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    // Update the request status to 'accepted'
    await Request.update(
      { status: 'accepted' },
      { where: { id: requestId } }
    );

    res.status(200).json({ success: true, message: 'Request accepted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Reject request controller
exports.rejectRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    // Update the request status to 'rejected'
    await Request.update(
      { status: 'rejected' },
      { where: { id: requestId } }
    );

    res.status(200).json({ success: true, message: 'Request rejected successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Filter requests by date controller
exports.filterRequestsByDate = async (req, res) => {
  try {
    const { date } = req.params;

    // Fetch requests filtered by date
    const requests = await Request.findAll({
      where: db.sequelize.literal(`DATE(createdAt) = '${date}'`)
    });

    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
