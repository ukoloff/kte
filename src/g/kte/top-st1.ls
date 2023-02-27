#
# Top Groove #1
#
module.exports = top-st1
<<<
  id: 6
  name: 'Канавка №1 внешняя'

function top-st1 kte
  require! <[
    ../state
    ../echo
    ../turret
    ./prolog
    ./epilog
  ]>

  tx = turret kte
    .query do
      Xmax: kte.$.B / 2
      Xmin: kte.$.A / 2
      groove-depth: kte.$.h
      groove-width: kte.$.b

  prolog kte, "Tochit kanavku"
  tx.out!


  epilog kte
