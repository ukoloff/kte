require! <[
  ../point/distance
]>

module.exports = closed

function closed path
  return path and path.length > 0 and 0 == distance path[0], path[*-1]
