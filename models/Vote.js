const {DataTypes, STRING, INTERGER} = require('sequelize');
const db = require('../data/db')
const Vote = db.define('votes', {
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


module.exports = Vote;