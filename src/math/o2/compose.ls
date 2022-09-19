#
# Compose transformations
# (Right to left!)
#
module.exports = compose

function compose
  require! <[
    ./eye
    ../point/o2
    ../point/sub
  ]>
  result = eye!
  for z in arguments by -1 when z
    for til 3
      result[..] = o2 result[..], z
  for til 2
    result[..] = sub result[..], result[2]
  result
