#
# End notch_z Closed Zone
#
module.exports = end-notch
<<<
  id: 7
  name: 'Выточка аксиальная'

!function end-notch kte
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
      Xmin: R[0][1]
      groove-depth: Sz[0]
      groove-width: Sz[1]
  debugger

  prolog kte, "Tochit vitochku"
  # tx.out!

  epilog kte


