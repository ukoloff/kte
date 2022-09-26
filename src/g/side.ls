#
# Convert First / Second to Left / Right
#
module.exports = side

function side is-second
  require! <[ ./state ]>

  !state.job.global.dir != !is-second
