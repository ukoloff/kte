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
    ./qtool
    ./path2g
    ./skip
    ./turret
    ./prolog
    ./epilog
  ]>

  if skip kte
    return

  tools = qtool kte
  stages = tools.length
  tool = tools[0]

  # TODO: Drilling
  # ...

  # Milling
  prolog kte, "Rastochit poluotkrituyu zonu nacherno"
  turret tool

  echo "N10 G96 S#{tool.V} #{if true then \M03 else \M04 };"
  echo "N20 X#{2 * kte._[0][1] - 4} Z2;"
  echo "N30 G71 U#{tool.AR} R1;"

  G-code = path2g kte._, 1

  echo "N40 G71 P#{echo.N +1} Q#{echo.N G-code.length} U#{if stages < 2 then -0.05 else -0.5} W1 F#{tool.F} S#{tool.V} M8;"

  echo "N50 #{G-code.shift!};"
  tail = G-code.pop!
  for line in G-code
    echo "#{line};"
  echo "N60 #{tail};"

  echo "N70 G00 X#{x0 = state.job.global.D - 4} Z2 M9;"
  echo "N75 M5;"
  if stages < 2
    epilog kte
    return

  tool = tools[1]
  prolog kte, "Rastochit poluotkrituyu zonu nachisto"
  turret tool

  echo "N110 G96 S#{tool.V} #{if true then \M03 else \M04 };"
  echo "N120 X#{2 * kte._[0][1] - 4} Z2;"

  G-code = path2g kte._, 1
  echo "N130 #{G-code.shift!} F#{tool.F} S#{tool.V} M8;"
  tail = G-code.pop!
  for line in G-code
    echo "#{line};"
  echo "N160 #{tail};"

  echo "N170 G00 X#{x0} Z2 M9;"
  echo "N175 M5;"

  epilog kte
