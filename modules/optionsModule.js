const {dataTypes, INTERGER, STRING} = require('sequelize');

const Option = db.define('Option', {
  id: {
    type: DataTypes.INTEGER,
    foreignKey: pollId,
    autoIncrement: true
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
});