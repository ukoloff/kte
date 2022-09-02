module.exports = scalar

function scalar a, b
  result = 0
  for i til 2
    result += a[i] * b[i]
  result
