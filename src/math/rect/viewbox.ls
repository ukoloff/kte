#
# As SVG's viewBox
#
require! <[
  ./size
]>

module.exports = view-box

function view-box R
  [R[0][0], -R[1][1]]
  .concat size R
  .join ' '
