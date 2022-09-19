#
# Prepare Axis & Bounds
#
module.exports = make-axis

function make-axis paths
  require! <[
    ../math/rect/union
    ../math/rect/expand
    ../math/path/bounds
  ]>

  for path in paths
    R = union R, bounds path
  RX = expand R, 1.01
  R = union R, bounds axis = [[RX[0][0], 0, 0], [RX[1][0], 0, 0]]
  axis.bounds = expand R, 1.01
  axis
