#
# Convert G-code to triplets [[x, y, bulge]...]
#
module.exports = g2triplets

function g2triplets Gs
  for g in Gs
    vertex =
      g.Z ? if prev then prev[0] else 0
      g.X ? if prev then prev[1] else 0
      0

    if prev and g.G >= 2 and g.I? and g.K?
      # Arc
      A = for i til 2
        vertex[i] - prev[i]
      lenA = len A
      catets =
        scalar([g.K, g.I], mul-i A) / lenA
        lenA / 2
      catets[1] += len catets
      if (/* gotCCW = */catets[0] > 0) != (/* needCCW = */g.G == 3)
        catets = mul-i catets
      prev[2] = catets[0] / catets[1]

    prev = vertex

function mul-i vector
  return
    -vector[1]
    +vector[0]

function scalar a, b
  result = 0
  for i til 2
    result += a[i] * b[i]
  result

function len vector
  Math.sqrt scalar vector, vector
