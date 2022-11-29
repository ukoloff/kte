#
# Bottom Semiopened Zone
#
module.exports = bottom-semiopened
<<<
  id:   10
  name: 'Полуоткрытая внутр'

!function bottom-semiopened kte
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

  last = kte._[*-1]

  tx = turret kte
    .query do
      Xmax: kte._[0][1]
      Xmin: last[1]
      bore-diameter: 2 * last[1]
      bore-depth: -last[0]

  # TODO: Drilling
  # ...

  # Milling
  prolog kte, "Rastochit poluotkrituyu zonu nacherno"
  tx.out!

  echo "N10 G96 S#{tx.tool.V} #{tx.m03!};"
  echo "N20 X#{2 * last[1] - 1} Z2;"
  echo "N30 G71 U#{tx.tool.AR} R1;"

  G-code = path2g kte._, 1

  echo "N40 G71 P#{echo.N +1} Q#{echo.N G-code.length} U#{if tx.stage2 true then -0.5 else -0.05} W1 F#{tx.tool.F} S#{tx.tool.V} M8;"

  echo "N50 #{G-code.shift!};"
  tail = G-code.pop!
  for line in G-code
    echo "#{line};"
  echo "N60 #{tail};"

  echo "N65 G00 Z2 M9"
  echo "N70 G00 X#{x0 = state.job.global.D + 4}"
  echo "N75 M5;"
  unless tx.stage2!
    epilog kte
    return

  prolog kte, "Rastochit poluotkrituyu zonu nachisto"
  tx.out!

  echo "N110 G96 S#{tx.tool.V} #{tx.m03!};"
  echo "N120 X#{2 * kte._[0][1] - 4} Z2;"

  G-code = path2g kte._, 1
  echo "N130 #{G-code.shift!} F#{tx.tool.F} S#{tx.tool.V} M8;"
  tail = G-code.pop!
  for line in G-code
    echo "#{line};"
  echo "N160 #{tail};"

  echo "N165 G00 Z2 M9"
  echo "N170 G00 X#{x0}"
  echo "N175 M5;"

  epilog kte
