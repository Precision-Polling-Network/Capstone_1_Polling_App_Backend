const {dataTypes, STRING, INTERGER} = require('sequelize');

const Polls = db.define('Poll', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
});