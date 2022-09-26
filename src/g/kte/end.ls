#
# End (Opened) Zone
#
module.exports = end-opened

!function end-opened kte
  require! <[
    ../state
    ../echo
    ./qtool
  ]>

  tools = qtool kte
  stages = tools.length
  tool = tools[0]

  echo "N9#{tool.tool}G90G18G00T#{tool.tool}#{tool.tool};"
  echo "G96 S#{tool.V} M03;"
  debugger
  echo "N20 X#{x0 = state.job.global.D / 2} Z#{z0 = Math.max (state.job.global.W - state.job.size[0]) / 2};"
  echo "N30 G72 W#{tool.AR} R1;"
  echo "N40 G72 P50 Q60 U0 W#{if stages < 2 then 0.5 else 0} F#{tool.F} S#{tool.V} M8;"
  echo "N50 G00 Z0;"
  if stages < 2
    echo "N60 G01 X-1;"
  else
    echo "N60 G01 X-1 F#{tools[1].F} S#{tools[1].V};"
    echo "N65 G70 P50 Q60;"
  echo "N70 G00 X#{x0} Z#{z0} M9;"
  echo "N75 M5;"
