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

  echo "N10 G96 S#{tx.tool.V} #{tx.m03!}"
  echo "N20 Z#{first[0]}"
  echo "N30 X#{2 * first[1] + 2}"

  if  kte.$.b <= tx.tool.AR
    echo "N40 G01 X#{2 * kte._[1][1]} F#{tx.tool.F}"
    echo "N50 X#{2 * first[1] + 2} F2"
    echo "N60 G00 X#{state.job.global.D + 2} M9"
    echo "N65 Z2 M05"
    epilog kte
    return

  echo "N40 G75 R1"
  echo "N50 G75 X#{2 * kte._[1][1]} Z#{last[0] + tx.tool.AR} P#{500 * tx.tool.AR} Q#{800 * tx.tool.AR} R0 F#{tx.tool.F} M8"

  if tx.stage2! #and kte.$.b > tx.tool.AR
    echo "N70 G01 Z#{last[0] + tx.tool.AR} F2"
    echo "N75 X#{2 * kte._[1][1]} F#{tx.tool.F}"
    echo "N80 Z#{first[0] - 1}"
    echo "N85 G00 X#{2 * first[1] + 2}"
    echo "N90 Z#{first[0]}"
    echo "N95 G01 X#{2 * kte._[1][1]} F#{tx.tool.F}"
    echo "N100 Z#{first[0] - 1}"
    echo "N105 G00 X#{first[1] + 2}"
  echo "N60 G00 X#{state.job.global.D + 2} M9"
  echo "N65 Z2 M05"

  epilog kte
