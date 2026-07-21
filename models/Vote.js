const {DataTypes, STRING, INTERGER} = require('sequelize');
const db = require('../data/db')
const Votes = db.define('votes', {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


module.exports = Vote;