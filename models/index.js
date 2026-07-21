const Votes = require('./Votes.js')
const Options = require('./Options.js')
const Polls = require('./Polls.js')


Polls.hasMany(Options)
Options.belongsTo(Polls)

Options.hasMany(Votes)
Votes.belongsTo(Options)


module.exports = { db, Options, Polls, Votes }

