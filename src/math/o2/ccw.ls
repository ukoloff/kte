#
# Counterclockwise rotation (degrees)
#

module.exports = CCW

function CCW degrees
  degrees *= Math.PI / 180
  cos = Math.cos degrees
  sin = Math.sin degrees
  return
    [cos, sin]
    [-sin, cos]
    [0, 0]
