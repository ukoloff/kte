#
# Top Groove #1
#
module.exports = top-st1
<<<
  id: 13
  name: 'Канавка №1 внутренняя'

function top-st1 kte
  require! <[
    ../state
    ../echo
    ../turret
    ./prolog
    ./epilog
    ./path2g
  ]>

  tx = turret kte
    .query do
      Xmax: kte.$.B / 2
      Xmin: kte.$.A / 2
      groove-depth: kte.$.h
      groove-width: kte.$.b
      bore-diameter: kte.$.A

  prolog kte, "Tochit kanavku"
  tx.out!

  echo "N10 G96 S#{tx.tool.V} #{tx.m03!}"
  echo "N15 X#{2 * kte._[0][1] - 1}"
  echo "N20 G01 Z#{kte._[0][0]} F2"
  echo "N30 G71 U#{tx.tool.AR} R1"

  G-code = path2g kte._, 1

  echo "N40 G71 P#{echo.N +1} Q#{echo.N G-code.length} U#{if tx.stages > 1 then 0.5 else 0} W0.1 F#{tx.tool.F} S#{tx.tool.V} M8"
  for line in G-code
    echo line

  if tx.stage2!
    echo "N65 G70 P#{echo.N -G-code.length} Q#{echo.N -1}"

  echo "N70 G01 X#{2 * kte._[0][1] - 1} F2"
  echo "N75 G00 Z2 M9"
  echo "N80 X#{state.job.global.D + 2} M5"

  epilog kte
