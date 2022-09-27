#
# Add line to resulting NC Program
#
require! <[
  ./state
]>

module.exports = echo

echo <<< {all, reset}

!function echo str=''
  (state.ncp ?= []).push str

function all
  (state.ncp ? []).join \\n

function reset
  state.ncp = []
