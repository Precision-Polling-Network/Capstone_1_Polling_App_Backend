const {DataTypes, STRING, INTERGER} = require('sequelize');
const db = require('../data/db')
const Polls = db.define('poll', 
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


module.exports = Polls;