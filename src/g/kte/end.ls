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
  echo "N20 X#{state.job.global.D / 2} Z???;"
  echo "N30 G72 W#{tool.AR} R1;"
  echo "N40 G72 P50 Q60 U0 W0 F#{tool.F} S#{tool.V} M8;"
  echo "N50 G00 Z0;"
  echo "N75 M5;"
