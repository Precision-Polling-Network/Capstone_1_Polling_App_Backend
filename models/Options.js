const {DataTypes} = require('sequelize');
const db = require('../data/db')

const Options = db.define('option', {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Options;