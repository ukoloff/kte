#
# Convert G-code to triplets [[x, y, bulge]...]
#
require! <[
  ../math/point/sub
  ../math/point/scalar
  ../math/point/len
  ../math/point/ccw90
]>

module.exports = g2triplets

function g2triplets Gs
  for g in Gs
    vertex =
      g.Z ? if prev then prev[0] else 0
      g.X ? if prev then prev[1] else 0
      0

    for k, v of g when 0 > 'GXZIK'.index-of k
      vertex[k] = v

    if prev and g.G >= 2 and g.I? and g.K?
      # Arc
      A = sub vertex, prev
      lenA = len A
      catets =
        scalar([g.K, g.I], ccw90 A) / lenA
        lenA / 2
      if catets[0] < 0
        - = catets[0]
        - = catets[1]
      catets[0] += len catets
      if (/* gotCCW = */catets[1] > 0) != (/* needCCW = */g.G == 3)
        catets = ccw90 catets
      prev[2] = catets[1] / catets[0]

    prev = vertex
