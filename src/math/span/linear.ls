#
# Linear coordinate transformation:
#   -1 -> a (start)
#   0  -> center of line segment
#   +1 -> z (end)
#
require! <[
  ../point/div
  ../point/add
  ../point/mul
  ./vector
]>

module.exports = linear

function linear span, at
  div do
    add do
      add span.a, span.z
      mul do
        vector span
        at
    2
