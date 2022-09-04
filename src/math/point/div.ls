require! <[
  ./len2
]>

module.exports = div

function div a, b
  if \number != typeof b
    a =
      a[0] * b[0] - a[1] * b[1]
      a[0] * b[1] + a[1] * b[0]
    b = len2 b
  for i til 2
    a[i] / b
