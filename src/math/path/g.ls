#
# Generate G-code for Turning (XZ)
#
require! <[
  ../span/center
  ../point/sub
]>

module.exports = G-code

function G-code path
  G = ''
  for pt, i in path
    mode = if i == 0
      0
    else if prev[2] == 0
      1
    else if prev[2] > 0
      3
    else
      2
    G += "G#{mode}#{pt2g pt}"
    if prev and prev[2] != 0
      c = center do
        a: prev
        b: prev[2]
        z: pt
      c = sub c, prev
      G += "I#{round c[1]}K#{round c[0]}"
    G += "\n"
    prev = pt
  G

function pt2g point
  "X#{round point[1]}Z#{round point[0]}"

function round x
  Math.round(x * 1000) / 1000
