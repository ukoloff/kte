#
# Parse DXF
#
require! <[
  ./read
  ./splitter
  ./explode
]>

module.exports = parse

function parse readline
  if \string == typeof readline
    readline = splitter readline
  explode read readline
