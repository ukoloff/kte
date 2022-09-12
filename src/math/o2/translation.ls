#
# Translation transform
#
module.exports = Translate

function Translate point
  return
    [1 0]
    [0 1]
    point.slice 0, 2
