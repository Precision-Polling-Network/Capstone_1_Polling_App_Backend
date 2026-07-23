const {DataTypes} = require('sequelize');
const db = require('../data/db')

const Option = db.define('option', {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Option;