require! <[
  ../point/sub
]>

module.exports = size

function size R
  if R
    sub R[1], R[0]
