#
# Top Semiopened Zone
#
module.exports = top-semiopened

!function top-semiopened kte
  require! <[
    ../state
    ../echo
    ./qtool
    ./path2g
    ./skip
  ]>

  if skip kte
    return

  tools = qtool kte
  stages = tools.length
  tool = tools[0]
  tool-id = "#{tool.tool}"
  while tool-id.length < 2
    tool-id = "0#{tool-id}"

  echo "N900 G90 G18 G00 T#{tool-id}#{tool-id};"
  echo "N10 G96 S#{tool.V} #{if true then \M03 else \M04 };"
  echo "N20 X#{kte._[0][1] + 2} Z2;"
  echo "G71 U#{tool.AR} R1;"
  echo "N40 G71 P50 Q60 U#{if stages < 2 then 0 else 0.5} W1 F#{tool.F} S#{tool.V} M8;"

  G-code = path2g kte._, 1
  echo "N50 #{G-code.shift!};"
  tail = G-code.pop!
  for line in G-code
    echo "#{line};"
  echo "N60 #{tail};"

  echo "N70 G00 X#{x0 = state.job.global.D / 2} Z2 M9;"
  echo "N75 M5;"
  if stages < 2
    return

  tool = tools[1]
  tool-id = "#{tool.tool}"
  while tool-id.length < 2
    tool-id = "0#{tool-id}"
  echo "N900 G90 G18 G00 T#{tool-id}#{tool-id};"
  echo "N110 G96 S#{tool.V} #{if true then \M03 else \M04 };"
  echo "N120 X#{kte._[0][1] + 2} Z2;"

  G-code = path2g kte._, 1
  echo "N130 #{G-code.shift!} F#{tool.F} S#{tool.V} M8;"
  tail = G-code.pop!
  for line in G-code
    echo "#{line};"
  echo "N160 #{tail};"

  echo "N170 G00 X#{x0} Z2 M9;"
  echo "N175 M5;"
