#
# End (Opened) Zone
#
module.exports = end-opened
<<<
  id: 1
  name: 'Торец'

!function end-opened kte
  require! <[
    ../state
    ../echo
    ../turret
    ./prolog
    ./epilog
  ]>

  tx = turret kte
    .query do
      Xmax: state.job.global.D / 2

  x0 = state.job.global.D
  z0 = Math.max 0, round (state.job.global.W - state.job.size[0]) / 2

  prolog kte, "Podrezat torez"
  tx.out!

  echo "N10 G96 S#{tx.tool.V} #{tx.m03!};"
  echo "N20 X#{x0} Z#{z0};"
  echo "N30 G72 W#{tx.tool.AR} R1;"
  echo "N40 G72 P#{echo.N +1} Q#{echo.N +2} U0 W#{if tx.stage2 true then 0.5 else 0} F#{tx.tool.F} S#{tx.tool.V} M8;"
  echo "N50 G00 Z0;"
  unless tx.stage2!
    echo "N60 G01 X-2;"
  else
    echo "N60 G01 X-2 F#{tx.tool.F} S#{tx.tool.V};"
    echo "N65 G70 P#{echo.N -2} Q#{echo.N -2};"
  echo "G00 Z1;"
  echo "N70 G00 X#{x0} Z#{z0} M9;"
  echo "N75 M5;"
  epilog kte

function round x
  1e-3 * Math.round 1e+3 * x
