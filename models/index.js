const db = require('../data/db.js')
const Vote = require('./Vote.js')
const Option = require('./Option.js')
const Poll = require('./Poll.js')

// Polls.hasMany(Options)
// Votes.belongsTo(Options)

module.exports = { db, Option, Poll, Vote }