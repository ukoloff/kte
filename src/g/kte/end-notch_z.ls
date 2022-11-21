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

  prolog kte, "Tochit vitochku"
  tx.out!

  echo "N10 G96 S#{tx.tool.V} #{if true then \M03 else \M04 };"
  echo "N20 G00 X#{R[1][1]} Z2;"
  echo "N30 Z#{R[1][0] + 1};"
  echo "N40 G74 R1;"
  if tx.tool.AR == Sz[1]:
    echo "N50 G74 Z#{R[0][0]} Q#{500 * tx.tool.AR} F#{tx.tool.F} M8;"
  else:
    echo "N50 G74 X#{R[0][1] + tx.tool.AR} Z#{R[0][0]} P#{800 * tx.tool.AR} Q#{500 * tx.tool.AR} R0 F#{tx.tool.F} M8;"
  echo "N60 G00 Z2 M9;"
  echo "N65 X#{state.job.global.D + 2} M05;"

  if tx.stage2! and kte.$.b > tx.tool.AR
    echo "N10 G96 S#{tx.tool.V} #{if true then \M03 else \M04 };"
    echo "N20 G00 X#{R[1][1] - 0.01} Z2;"
    echo "N30 Z#{R[1][0] + 1};"
    echo "N40 G74 R1;"
    echo "N50 G74 X#{R[0][1] + tx.tool.AR + 0.1} Z#{R[0][0] + 0.1} P#{800 * tx.tool.AR} Q#{500 * tx.tool.AR} R0 F#{tx.tool.F} M8;"
    echo "N70 G01 X#{R[1][1] - 0.2} F2;"
    echo "N75 Z#{R[0][0] + 1} F2;"
    echo "N80 Z#{R[0][0]} F#{tx.tool.F};"
    echo "N85 G00 Z#{R[1][0] + 2};"
    echo "N90 G01 X#{R[1][1]} F2;"
    echo "N95 G01 Z#{R[0][0]} F#{tx.tool.F};"
    echo "N100 X#{R[0][1] + tx.tool.AR + 0.2};"
    echo "N105 G00 Z#{R[1][0] + 2};"
    echo "N110 G01 X#{R[0][1]} F2;"
    echo "N115 G01 Z#{R[0][0]} F#{tx.tool.F};"
    echo "N120 X#{R[0][1] + tx.tool.AR + 0.2};"
    echo "N125 G00 Z2 M9;"
    echo "N130 X#{state.job.global.D + 2} M05";
  epilog kte


