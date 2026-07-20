const {Sequelize} = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/polling_app',{logging:false})



module.exports = db;