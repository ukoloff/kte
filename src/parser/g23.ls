#
# Convert G-code to triplets [[x, y, bulge]...]
#
module.exports = g2triplets

function g2triplets Gs
  for g in Gs
    triplet =
      g.Z ? if prev then prev[0] else 0
      g.X ? if prev then prev[1] else 0
      0

    if prev and g.G >= 2 and g.I? and g.K?
      # Arc
      needCCW = g.G == 3
      A = for i til 2
        triplet[i] - prev[i]
      lenA = len A = mul-i A
      nA = for i til 2
        A[i] / lenA
      lenR = len R = [g.K, g.I]
      bulge =
        lenR - Math.abs AR = scalar nA, R
        lenA / 2
      unless gotCCW = AR > 0
        bulge[0] = - bulge[0]
      if needCCW != gotCCW
        bulge = mul-i bulge
      prev[2] = bulge[0] / bulge[1]

    prev = triplet

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
