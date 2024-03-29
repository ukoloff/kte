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
    ../../math/rect/round
  ]>

  R = bounds kte._
  round R
  Sz = size R

  tx = turret kte
    .query do
      Xmax: R[1][1]
      Xmin: R[0][1]
      groove-depth: Sz[0]
      groove-width: Sz[1]

  prolog kte, "Tochit vitochku"
  tx.out!

  echo "N10 G96 S#{tx.tool.V} #{tx.m03!}"
  echo "N20 G00 X#{2 * R[1][1]} Z2"
  echo "N30 Z#{R[1][0] + 1}"
  echo "N40 G74 R1"
  if tx.tool.AR == Sz[1]
    echo "N50 G74 Z#{R[0][0]} Q#{500 * tx.tool.AR} F#{tx.tool.F} M8"
  else
    echo "N50 G74 X#{2 * R[0][1] + 2 * tx.tool.AR} Z#{R[0][0]} P#{800 * tx.tool.AR} Q#{500 * tx.tool.AR} R0 F#{tx.tool.F} M8"
  echo "N60 G00 Z2 M9"
  echo "N65 X#{state.job.global.D + 2} M05"

  if tx.stage2! and Sz[1] > tx.tool.AR
    echo "N10 G96 S#{tx.tool.V} #{tx.m03!}"
    echo "N20 G00 X#{2 * R[1][1] - 0.4} Z2"
    echo "N30 Z#{R[1][0] + 1}"
    echo "N40 G74 R1"
    echo "N50 G74 X#{2 * R[0][1] + 2 * tx.tool.AR + 0.2} Z#{R[0][0] + 0.1} P#{800 * tx.tool.AR} Q#{500 * tx.tool.AR} R0 F#{tx.tool.F} M8;"
    echo "N70 G01 X#{2 * R[1][1]} F2"
    echo "N75 Z#{R[0][0]} F#{tx.tool.F}"
    echo "N80 X#{2 * R[1][1] - 0.4}"
    echo "N85 G00 Z#{R[1][0] + 1}"
    echo "N90 G01 X#{2 * R[0][1] + 2 * tx.tool.AR} F2"
    echo "N95 G01 Z#{R[0][0]} F#{tx.tool.F}"
    echo "N100 X#{2 * R[1][1] - 0.4}"
    echo "N105 G00 Z#{R[1][0] + 2}"
    echo "N110 G00 Z2 M9"
    echo "N115 X#{state.job.global.D + 2} M05";
  epilog kte


