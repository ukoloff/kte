#
# Top Opened Zone
#
module.exports = top-opened
<<<
  id: 2
  name: 'Открытая зона наружная'

!function top-opened kte
  require! <[
    ./qtool
    ./turret
    ../state
    ../echo
    ./prolog
    ./epilog
    ../../math/path/bounds
    ../../math/rect/size
  ]>

  sz = size bounds kte._
  # Check for Twin Top Open
  if sz[0] >= state.job.size[0]
    console.warn "Предусмотреть обработку открытой зоны со стороны №2!"

  # TODO: Thread check
  # ...

  tools = qtool kte
  stages = tools.length
  tool = tools[0]

  prolog kte, "Tochit otkrituyu zonu"
  turret tool

  echo "N10 G96 S#{tool.V} #{if true then \M03 else \M04 };"
  echo "N20 G00 X#{x0 = state.job.global.D} Z2;"
  echo "N30 G71 U#{tool.AR} R1;"
  echo "N40 G71 P#{echo.N +1} Q#{echo.N +2} U#{if stages < 2 then 0 else 0.5} W0 F#{tool.F} S#{tool.V} M8;"
  echo "N50 G00 X#{2 * kte._[0][1]};"
  if stages < 2
    echo "N60 G01 Z#{kte._[*-1][0]};"
  else
    echo "N60 G01 Z#{kte._[*-1][0]} F#{tools[1].F} S#{tools[1].V};;"
    echo "N65 G70 P#{echo.N -2} Q#{echo.N -1};"
  echo "N70 G00 X#{x0} Z2 M9;"
  echo "N75 M5;"
  epilog kte
