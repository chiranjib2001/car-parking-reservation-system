const User = require('../models/user');

// User registration controller
exports.registerUser = async (req, res) => {
  try {
    const { username, password, email, firstName, lastName } = req.body;

    // Create a new user
    const user = await User.create({ username, password, email, firstName, lastName });

    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// User login controller
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username and password
    const user = await User.findOne({ where: { username, password } });

    if (!user) {
      res.status(404).json({ success: false, message: 'Invalid username or password' });
      return;
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get user details controller
exports.getUserDetails = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by userId
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update user details controller
exports.updateUserDetails = async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, email, firstName, lastName } = req.body;

    // Find the user by userId
    let user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }

    // Update the user details
    user.username = username;
    user.email = email;
    user.firstName = firstName;
    user.lastName = lastName;
    await user.save();

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete user controller
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by userId
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }

    // Delete the user
    await user.destroy();

    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
