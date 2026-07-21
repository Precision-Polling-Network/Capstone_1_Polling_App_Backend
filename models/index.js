const db = require('../data/db.js')
const Votes = require('./Votes.js')
const Options = require('./Options.js')
const Polls = require('./Polls.js')

// Polls.hasMany(Options)
// Votes.belongsTo(Options)

module.exports = { db, Options, Polls, Votes }