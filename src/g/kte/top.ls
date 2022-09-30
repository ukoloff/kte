#
# Top Opened Zone
#
module.exports = top-opened

!function top-opened kte
  require! <[
    ./qtool
    ../state
    ../echo
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
  tool-id = "#{tool.tool}"
  while tool-id.length < 2
    tool-id = "0#{tool-id}"

  echo "N900 G90 G18 G00 T#{tool-id}#{tool-id};"
  echo "N10 G96 S#{tool.V} #{if true then \M03 else \M04 };"
  echo "N20 X#{x0 = state.job.global.D / 2} Z2;"
  echo "N30 G71 U#{tool.AR} R1;"
  echo "N40 G71 P50 Q60 U#{if stages < 2 then 0 else 0.5} W0 F#{tool.F} S#{tool.V} M8;"
  echo "N50 G00 X#{kte._[0][1]};"
  if stages < 2
    echo "N60 G01 Z#{kte._[*-1][0]};"
  else
    echo "N60 G01 Z#{kte._[*-1][0]} F#{tools[1].F} S#{tools[1].V};;"
    echo "N65 G70 P50 Q60;"
  echo "N70 G00 X#{x0} Z2 M9;"
  echo "N75 M5;"
