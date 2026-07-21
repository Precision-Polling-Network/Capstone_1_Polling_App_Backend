const {DataTypes, STRING, INTERGER} = require('sequelize');
const db = require('../data/db')
const Poll = db.define('poll', 
  {
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