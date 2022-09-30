#
# Skip KTE of single point
#
module.exports = skip-kte

function skip-kte kte
  require! <[
    ../../math/point/eq
    ../echo
  ]>

  path = kte._
  unless path.length == 2 and eq path[0], path[1]
    return
  echo "(---)"
  true
