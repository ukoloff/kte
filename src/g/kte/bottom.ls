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
  epilog kte

  if kte._[0][1] <= Rad
    return

  # Lathing
  tx = turret kte
    .query do
      id: 9   # Отверстие резцом
      Xmin: Rad
      Xmax: kte._[0][1]
      bore-diameter: 2 * Rad
      # bore-depth: state.job.size[0] ### TODO: bore-depth!!!

  prolog kte, "Rastochit otverstie nacherno"
  tx.out!

  echo "N10 G96 S#{tx.tool.V} #{tx.m03!}"
  echo "N20 X#{2 * Rad - 0.5} Z2"
  echo "N30 G71 U#{tx.tool.AR} R1"
  echo "N40 G71 P#{echo.N +1} Q#{echo.N +3} U#{if tx.stages > 1 then -0.5 else -0.05} W1 F#{tx.tool.F} S#{tx.tool.V} M8"
  echo "N50 G00 X#{2 * kte._[0][1]}"
  echo "N52 G1 X#{2 * kte._[0][1]} Z#{kte._[0][0]}"
  echo "N55 G1 X#{2 * kte._[0][1]} Z#{-state.job.global.W - 1}"
  echo "N60 G1 X#{2 * kte._[0][1] - 1}"
  echo "N65 G00 Z2 M9"
  echo "N70 G00 X#{state.job.global.D + 2}"
  echo "N75 M5"

  unless tx.stage2!
    epilog kte
    return

  prolog kte, "Rastochit otverstie nachisto"
  tx.out!

  echo "N110 G96 S#{tx.tool.V} #{tx.m03!}"
  echo "N120 X#{2 * kte._[0][1]} Z2"
  echo "N130 G1 X#{2 * kte._[0][1]} Z#{kte._[*-1][0]} F#{tx.tool.F} S#{tx.tool.V} M8"
  echo "N160 G1 X#{2 * kte._[0][1] - 1} F2"
  echo "N165 G0 Z2 M9"
  echo "N170 G00 X#{state.job.global.D + 2}"
  echo "N175 M5"

  epilog kte
