module.exports = mul

function mul a, b
  if \number == typeof b
    for i til 2
      a[i] * b
  else
    return
      a[0] * b[0] - a[1] * b[1]
      a[0] * b[1] - a[1] * b[0]
