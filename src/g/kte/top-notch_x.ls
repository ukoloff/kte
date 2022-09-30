#
# Top Opened Zone
#
module.exports = top-notch

!function top-notch kte
  require! <[
    ./qtool
    ../state
    ../echo
  ]>

  tools = qtool kte
  stages = tools.length
  tool = tools[0]
  tool-id = "#{tool.tool}"
  while tool-id.length < 2
    tool-id = "0#{tool-id}"

  first = kte._[0]
  last = kte._[*-1]

  echo "N900 G90 G18 G00 T#{tool-id}#{tool-id};"
  echo "N30 G75 R1;"
  echo "N40 G75 X#{last[1]} Z#{last[0] + tool.AR} P#{tool.AR} Q#{0.8 * tool.AR};"
  echo "N50 G00 X#{state.job.global.D / 2 + 2} M9;"
  echo "N60 Z#{(state.job.global.W - last[0]) / 2};"  # TODO: ??? WTF?!

  if stages > 1 and kte.$.b > tool.AR
    echo "N65 G01 Z#{last[0] + tool.AR} F2;"
    echo "N70 X#{last[1]} F#{tool[1].F};"
    echo "N75 Z#{first[0] - 1};"
    echo "N80 G00 X#{first[1]};"
    echo "N85 Z#{first[0]};"
    echo "N90 G01 X#{last[1]} F#{tool[1].F};"
    echo "N95 Z#{first[0] - 1};"
    echo "N100 G00 X#{state.job.global.D / 2 + 1} M9 M5;"
  else
    echo "N65 M5;"
