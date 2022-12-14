#
# Top Opened Zone
#
module.exports = top-notch
<<<
  id: 4
  name: 'Выточка наружная'

!function top-notch kte
  require! <[
    ../turret
    ./prolog
    ./epilog
    ../state
    ../echo
  ]>

  tx = turret kte
    .query do
      Xmax: kte._[0][1]
      Xmin: kte._[1][1]
      groove-depth: kte.$.h
      groove-width: kte.$.b

  first = kte._[0]
  last = kte._[*-1]

  prolog kte, "Tochit vitochku"
  tx.out!

  echo "N10 G96 S#{tx.tool.V} #{tx.m03!};"
  echo "N20 X#{2 * first[1] + 2} Z#{first[0]};"
  echo "N30 G75 R1;"
  echo "N40 G75 X#{2 * kte._[1][1]} Z#{last[0] + tx.tool.AR} P#{1000 * tx.tool.AR} Q#{800 * tx.tool.AR} R0;"
  echo "N50 G00 X#{state.job.global.D + 2} M9;"
  echo "N60 Z#{(state.job.global.W - last[0]) / 2};"  # TODO: ??? WTF?!

  if tx.stage2! and kte.$.b > tx.tool.AR
    echo "N65 G01 Z#{last[0] + tx.tool.AR} F2;"
    echo "N70 X#{2 * last[1]} F#{tx.tool.F};"
    echo "N75 Z#{first[0] - 1};"
    echo "N80 G00 X#{2 * first[1] + 2};"
    echo "N85 Z#{first[0]};"
    echo "N90 G01 X#{2 * last[1]} F#{tx.tool.F};"
    echo "N95 Z#{first[0] - 1};"
    echo "N100 G00 X#{state.job.global.D + 2} M9 M5;"
  else
    echo "N65 M5;"

  epilog kte
