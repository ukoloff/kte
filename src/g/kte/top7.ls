#
# Top Semiopened Zone
#
module.exports = top-semiopened

!function top-semiopened kte
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

  echo "N9#{tool-id} G90 G18 G00 T#{tool-id}#{tool-id};"
  echo "N10 G96 S#{tool.V} #{if true then \M03 else \M04 };"
  echo "N20 X#{kte._[0][1] + 2} Z2;"
  echo "G71 U#{tool.AR} R1;"
  echo "N40 G71 P50 Q60 U#{if stages < 2 then 0 else 0.5} W1 F#{tool.F} S#{tool.V} M8;"
  # echo "N50 G00 Z0;"
  echo "( ... )"
  echo "N75 M5;"
  if stages < 2
    return

  tool = tools[1]
  tool-id = "#{tool.tool}"
  while tool-id.length < 2
    tool-id = "0#{tool-id}"
  echo "N9#{tool-id} G90 G18 G00 T#{tool-id}#{tool-id};"

  echo "( ... )"
  echo "N175 M5;"
