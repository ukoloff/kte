#
# Round Rect in place
#
module.exports = round-rect

!function round-rect rect
  for i til 2
   for j til 2
    rect[i][j] = 1e-3 * Math.round 1e3 * rect[i][j]
