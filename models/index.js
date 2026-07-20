const db = require('../data/db.js')
const Votes = require('./Votes.js')
const Options = require('./Options.js')
const Polls = require('./Polls.js')
// const { HasMany } = require('sequelize')


// Polls.hasMany(Options)
// Options.belongsTo(Polls)
// // Options.HasMany(Votes)
// // Votes.belongsTo(Options)





module.exports = { db, Options, Polls, Votes }