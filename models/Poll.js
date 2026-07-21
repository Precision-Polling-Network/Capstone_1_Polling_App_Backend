const {DataTypes, STRING, INTERGER} = require('sequelize');
const db = require('../data/db')
const Poll = db.define('poll', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type:DataTypes.STRING,
    allowNull: false
  }
});


module.exports = Poll;