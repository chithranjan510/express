const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'mysql@1810', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;