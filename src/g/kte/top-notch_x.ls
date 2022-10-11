#
# Top Opened Zone
#
module.exports = top-notch

!function top-notch kte
  require! <[
    ./qtool
    ./turret
    ./prolog
    ./epilog
    ../state
    ../echo
  ]>

  tools = qtool kte
  stages = tools.length
  tool = tools[0]

  first = kte._[0]
  last = kte._[*-1]

  prolog kte, "Tochit vitochku"
  turret tool

  echo "N10 G96 S#{tool.V} #{if true then \M03 else \M04 };"
  echo "N20 X#{2 * first[1] + 2} Z#{first[0]};"
  echo "N30 G75 R1;"
  echo "N40 G75 X#{2 * last[1]} Z#{last[0] + tool.AR} P#{tool.AR} Q#{0.8 * tool.AR};"
  echo "N50 G00 X#{state.job.global.D + 2} M9;"
  echo "N60 Z#{(state.job.global.W - last[0]) / 2};"  # TODO: ??? WTF?!

  if stages > 1 and kte.$.b > tool.AR
    echo "N65 G01 Z#{last[0] + tool.AR} F2;"
    echo "N70 X#{2 * last[1]} F#{tool[1].F};"
    echo "N75 Z#{first[0] - 1};"
    echo "N80 G00 X#{2 * first[1] + 2};"
    echo "N85 Z#{first[0]};"
    echo "N90 G01 X#{2 * last[1]} F#{tool[1].F};"
    echo "N95 Z#{first[0] - 1};"
    echo "N100 G00 X#{state.job.global.D + 2} M9 M5;"
  else
    echo "N65 M5;"

  epilog kte
