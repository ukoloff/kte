#
# Bottom Opened Zone
#
module.exports = bottom-opened

!function bottom-opened kte
  require! <[
    ../state
    ../echo
    ./qtool
    ./turret
  ]>

  tools = qtool kte
  stages = tools.length
  tool = tools[0]

  # Drilling
  Rad = Math.min 6, kte._[0][1]

  echo "N900 G90 G18 (Sverlit otverstie);"
  echo "G28 U0 W0;"
  echo "G54;"
  turret tool
  echo "N10 G96 S#{tool.V};"
  echo "N20 X0 Z2;"
  echo "N30 G83 X0 Z#{kte._[*-1][0] - Rad} Q#{2 * Rad} F#{tool.F};"
  echo "N40 G00 G80 X#{state.job.global.D + 4} Z2 M9;"
  echo "N75 M5;"

  # TODO: Milling
  # ...
