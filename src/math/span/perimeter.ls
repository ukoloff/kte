#
# Length of span
#
require! <[
  ../point/distance
]>

module.exports = perimeter

function perimeter span
  len = distance span.a, span.z
  if span.b
    len *= (Math.atan(span.b) / span.b) * (1 + span.b * span.b)
  len
