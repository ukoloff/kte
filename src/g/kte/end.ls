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
  tool-id = "#{tool.tool}"
  while tool-id.length < 2
    tool-id = "0#{tool-id}"
  x0 = state.job.global.D / 2
  z0 = Math.max (state.job.global.W - state.job.size[0]) / 2

  echo "N9#{tool-id} G90 G18 G00 T#{tool-id}#{tool-id};"
  echo "N10 G96 S#{tool.V} #{if true then \M03 else \M04 };"
  echo "N20 X#{x0} Z#{z0};"
  echo "N30 G72 W#{tool.AR} R1;"
  echo "N40 G72 P50 Q60 U0 W#{if stages < 2 then 0 else 0.5} F#{tool.F} S#{tool.V} M8;"
  echo "N50 G00 Z0;"
  if stages < 2
    echo "N60 G01 X-1;"
  else
    echo "N60 G01 X-1 F#{tools[1].F} S#{tools[1].V};"
    echo "N65 G70 P50 Q60;"
  echo "N70 G00 X#{x0} Z#{z0} M9;"
  echo "N75 M5;"
