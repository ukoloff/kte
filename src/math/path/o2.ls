#
# Apply transformation to path
#
require! <[
  ../point/o2
  ../o2/det
]>

module.exports = O2

function O2 path, transform
  result = for v in path
    o2 v, transform
    .concat v[2] || 0
  if transform and 0 > det transform
    for v in result
      - = v[2]
  result
