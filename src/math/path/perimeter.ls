#
# Find perimeter
#
require! <[
  ./spans
  ../span/perimeter
]>

module.exports = len

function len path
  result = 0
  spans path, !->
    result += perimeter it
  result
