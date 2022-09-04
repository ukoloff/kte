require! <[
  ./linear
]>

module.exports = center

function center span
  linear span, [0, (1 / span.b - span.b) / 2]
