require! <[
  ../point/bounds
]>

module.exports = add

function add R, pt
  unless R
    return bounds pt
  result = [[], []]
  for i til 2
    result[0].push Math.min R[0][i], pt[i]
    result[1].push Math.max R[1][i], pt[i]
  return result
