#
# Add line to resulting NC Program
#
require! <[
  ./state
]>

module.exports = echo

echo <<< {all, reset, N}

var line, block, lines

!function echo str=''
  if /^\s*[a-z]/i.test str
    n = if /\s*N900\s+/.test str
      900 + ++block
    else
      ++line
    str .= replace /^\s*N\s*\d+\s*|^\s*/i, "N#{n} "
  lines.push str

function all
  lines.join \\n

do !function reset
  lines := []
  line := 0
  block := 0

function N delta=0
  line + 1 + delta
