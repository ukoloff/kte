#
# Apply increasing N-labels to start of lines
#
module.exports = renumber

!function renumber
  require! <[
    ./state
  ]>

  count = 0
  blocks = 0
  ncp = state.ncp
  for line, i in ncp when /^[a-z]/i.test <| line .= trim!
    n = if /N900\s+/i.test line
      900 + ++blocks
    else
      ++count
    ncp[i] = line.replace /^N\s*\d+\s*|/i, "N#{n} "
