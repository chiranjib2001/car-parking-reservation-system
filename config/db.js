const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'chiru', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = sequelize;
