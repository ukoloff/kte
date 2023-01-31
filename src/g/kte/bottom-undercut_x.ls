#
# Top Thread Groove
#
module.exports = bottom-undercut
<<<
  id: 6
  name: 'Резьбовая канавка внешняя'

function bottom-undercut kte
  require! <[
    ../state
    ../echo
    ../turret
    ./prolog
    ./epilog
    ../../math/path/bounds
    ../../math/rect/size
  ]>

  R = bounds kte._
  Sz = size R

  tx = turret kte
    .query do
      Xmax: R[1][1]
      # Xmin: R[0][1]
      groove-depth: kte.$.h
      groove-width: kte.$.b

  prolog kte, "Tochit kanavku"
  tx.out!

  echo "(---)"
  epilog kte
