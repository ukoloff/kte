#
# Generate SVG's d-attribute for path
#
require! <[
  ../point/distance
  ./closed
]>

module.exports = svg

function svg path
  result = ''
  for vertex in path
    if result
      result += ' '
    unless prev
      # Start
      result += \M
    else unless prev[2]
      # Linear segment
      result += \L
    else
      # Arc
      radius = Math.abs(1 / prev[2] + prev[2]) / 4 * distance vertex, prev
      result += "A #{radius} #{radius} 0 #{Number 1 < Math.abs prev[2]} #{Number prev[2] > 0}"
    result += " #{vertex[0]} #{vertex[1]}"
    prev = vertex
  if closed path
    result += " Z"
  result
