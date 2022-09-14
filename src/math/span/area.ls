#
# Area of span sector
#
require! <[
  ../point/scalar
  ../point/ccw90
  ../point/len2
  ../point/sub
]>

module.exports = area

function square x
  x * x

function area span
  s = scalar(span.a, ccw90 span.z) / 2
  if span.b
    b2 = square span.b
    s -=
    (
      Math.atan(span.b) * square(1 + b2) - (1 - b2) * span.b
    ) / b2 / 8 * len2 sub span.a, span.z
  s
