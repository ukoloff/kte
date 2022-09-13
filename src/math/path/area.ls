#
# Find area
#
require! <[
  ./closed
  ./spans
  ../span/area
]>

module.exports = S

function S path
  unless closed path
    return 0
  result = 0
  spans path, !->
    result += area it
  result
