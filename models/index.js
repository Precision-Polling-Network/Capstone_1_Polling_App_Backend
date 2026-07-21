const Vote = require('./Vote.js')
const Option = require('./Option.js')
const Poll = require('./Poll.js')

Poll.hasMany(Option);
Option.belongsTo(Poll);
Option.hasMany(Vote);
Vote.belongsTo(Option);


module.exports = { db, Option, Poll, Vote }

