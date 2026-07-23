const {DataTypes} = require('sequelize');
const db = require('../data/db')
const Vote = db.define('votes', {
    selectedOption: { 
       type: DataTypes.INTEGER,
       allowNull: false, 
}});


module.exports = Vote;