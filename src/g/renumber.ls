#
# Apply increasing N-labels to start of lines
#
module.exports = renumber

!function renumber
  require! <[
    ./state
  ]>

  count = 0
  ncp = state.ncp
  for , i in ncp
    ncp[i] .= replace /^\s*N\s*\d+\s*/i, ->
      "N#{++count * 10} "
