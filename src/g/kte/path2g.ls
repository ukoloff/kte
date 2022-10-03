#
# Build G-code for path
#
module.exports = G-code

function G-code path, G0=0
  require! <[
    ../../math/span/center
    ../../math/point/sub
  ]>

  for pt, i in path
    mode = if i == 0
      G0
    else if prev[2] == 0
      1
    else if prev[2] > 0
      3
    else
      2
    G = "G#{mode} X#{round 2 * pt[1]} Z#{round pt[0]}"
    if prev and prev[2] != 0
      c = center do
        a: prev
        b: prev[2]
        z: pt
      c = sub c, prev
      G += " I#{round c[1]} K#{round c[0]}"
    prev = pt
    G

function round x
  Math.round(x * 1000) / 1000
