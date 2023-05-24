const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./user');

const Request = db.define('Request', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  place: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicleType: {
    type: DataTypes.ENUM('2-wheelers', '4-wheelers'),
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
    allowNull: false,
    defaultValue: 'pending',
  },
});

Request.belongsTo(User, { foreignKey: 'userId' });

module.exports = Request;
