#
# Top Opened Zone
#
module.exports = top-opened
<<<
  id: 2
  name: 'Открытая зона наружная'

!function top-opened kte
  require! <[
    ../turret
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

  tx = turret kte
    .query do
      Xmax: state.job.global.D / 2
      Xmin: kte._[0][1]

  prolog kte, "Tochit otkrituyu zonu"
  tx.out!

  echo "N10 G96 S#{tx.tool.V} #{if true then \M03 else \M04 };"
  echo "N20 G00 X#{x0 = state.job.global.D} Z2;"
  echo "N30 G71 U#{tx.tool.AR} R1;"
  echo "N40 G71 P#{echo.N +1} Q#{echo.N +2} U#{if tx.stage2 true then 0.5 else 0} W0 F#{tx.tool.F} S#{tx.tool.V} M8;"
  echo "N50 G00 X#{2 * kte._[0][1]};"
  unless tx.stage2!
    echo "N60 G01 Z#{kte._[*-1][0]};"
  else
    echo "N60 G01 Z#{kte._[*-1][0]} F#{tx.tool.F} S#{tx.tool.V}"
    echo "N65 G70 P#{echo.N -2} Q#{echo.N -1};"
  echo "N70 G00 X#{x0} Z2 M9;"
  echo "N75 M5;"
  epilog kte
