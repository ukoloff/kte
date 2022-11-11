#
# Bottom Opened Zone
#
module.exports = bottom-opened
<<<
  id: 16  # Also: 0
  name: 'Отверстие'

!function bottom-opened kte
  require! <[
    ../state
    ../echo
    ../turret
    ./prolog
    ./epilog
  ]>

  # Drilling
  Rad = Math.min 6, kte._[0][1]

  tx = turret kte
    .query do
      Xmax: Rad

  prolog kte, "Sverlit otverstie"
  tx.out!
  echo "N10 G96 S#{tx.tool.V};"
  echo "N20 X0 Z2;"
  echo "N30 G83 X0 Z#{kte._[*-1][0] - Rad} Q#{2 * Rad} F#{tx.tool.F};"
  echo "N40 G00 G80 X#{state.job.global.D + 4} Z2 M9;"
  echo "N75 M5;"

  # TODO: Milling
  # ...

  epilog kte
