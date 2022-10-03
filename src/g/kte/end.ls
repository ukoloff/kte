#
# End (Opened) Zone
#
module.exports = end-opened

!function end-opened kte
  require! <[
    ../state
    ../echo
    ./qtool
    ./turret
  ]>

  tools = qtool kte
  stages = tools.length
  tool = tools[0]

  x0 = state.job.global.D
  z0 = Math.max (state.job.global.W - state.job.size[0]) / 2

  echo "N900 G90 G18 (Podrezat torez);"
  echo "G28 U0 W0;"
  echo "G54;"
  turret tool
  echo "N10 G96 S#{tool.V} #{if true then \M03 else \M04 };"
  echo "N20 X#{x0} Z#{z0};"
  echo "N30 G72 W#{tool.AR} R1;"
  echo "N40 G72 P50 Q60 U0 W#{if stages < 2 then 0 else 0.5} F#{tool.F} S#{tool.V} M8;"
  echo "N50 G00 Z0;"
  if stages < 2
    echo "N60 G01 X-2;"
  else
    echo "N60 G01 X-2 F#{tools[1].F} S#{tools[1].V};"
    echo "N65 G70 P50 Q60;"
  echo "G00 Z1;"
  echo "N70 G00 X#{x0} Z#{z0} M9;"
  echo "N75 M5;"
