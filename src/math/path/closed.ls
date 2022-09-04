require! <[
  ../point/eq
]>

module.exports = closed

function closed path
  return path and path.length > 0 and eq path[0], path[*-1]
