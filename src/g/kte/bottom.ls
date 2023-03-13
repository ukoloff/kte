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

  echo "N10 G97 S#{Math.round 1000 * tx.tool.V / Math.PI / 2 / Rad} M4" # Not "#{tx.m03!}" !!!
  echo "N20 X0 Z2"
  echo "N30 G83 X0 Z#{-state.job.size[0] - Rad} Q#{2 * Rad} F#{tx.tool.F}"
  echo "N40 G00 G80 X#{state.job.global.D + 2} Z2 M9"
  echo "N75 M5"

  if kte._[0][1] <= Rad
    epilog kte
    return

  debugger
  tx = turret kte
    .query do
      id: 9   # Отверстие резцом
      Xmin: Rad
      Xmax: kte._[0][1]
      bore-diameter: 2 * Rad
      bore-depth: state.job.size[0]

  epilog kte
