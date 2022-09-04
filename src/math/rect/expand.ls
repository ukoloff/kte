require! <[
  ../point/mul
  ../point/add
  ../point/sub
  ./size
]>

module.exports = expand

function expand R, factor
  if R
    s = mul size(R), factor - 1
    return
      sub R[0], s
      add R[1], s
