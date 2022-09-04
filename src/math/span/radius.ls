require! <[
  ../point/distance
]>

module.exports = radius

function radius span
  Math.abs(1 / span.b + span.b) / 4 * distance span.a, span.z
