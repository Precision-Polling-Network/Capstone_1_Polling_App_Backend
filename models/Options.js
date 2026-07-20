const {DataTypes} = require('sequelize');
const db = require('../data/db')

const Options = db.define('option', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Options;