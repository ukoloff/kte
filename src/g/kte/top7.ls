#
# Top Semiopened Zone
#
module.exports = top-semiopened
<<<
  id: 3
  name: 'Полуоткрытая зона наружная'

!function top-semiopened kte
  require! <[
    ../state
    ../echo
    ./path2g
    ./skip
    ../turret
    ./prolog
    ./epilog
  ]>

  if skip kte
    return

  tx = turret kte
    .query do
      Xmax: kte._[*-1][1]
      Xmin: kte._[0][1]

  prolog kte, "Tochit poluotkrituyu zonu nacherno"
  tx.out!

  echo "N10 G96 S#{tx.tool.V} #{tx.m03!}"
  echo "N20 X#{2 * kte._[*-1][1] + 2} Z2"
  echo "G71 U#{tx.tool.AR} R1"

  G-code = path2g kte._, 1

  echo "N40 G71 P#{echo.N +1} Q#{echo.N G-code.length} U#{0.5} W1 F#{tx.tool.F} S#{tx.tool.V} M8"

  for line in G-code
    echo line

  echo "N70 G00 X#{x0 = state.job.global.D + 2} Z2 M9;"
  echo "N75 M5;"
  unless tx.stage2!
    epilog kte
    return

  prolog kte, "Tochit poluotkrituyu zonu nachisto"
  tx.out!

  echo "N110 G96 S#{tx.tool.V} #{tx.m03!}"
  echo "N120 X#{2 * kte._[0][1] + 2} Z2"

  G-code = path2g kte._, 1
  echo "N130 #{G-code.shift!} F#{tx.tool.F} S#{tx.tool.V} M8"
  for line in G-code
    echo line

  # echo "N165 G70 P20 Q60"

  echo "N170 G00 X#{x0} Z2 M9;"
  echo "N175 M5"
  epilog kte
