#
# Top Thread Groove
#
module.exports = bottom-undercut
<<<
  id: 13
  name: 'Резьбовая канавка внутренняя'

function bottom-undercut kte
  require! <[
    ../state
    ../echo
    ../turret
    ./prolog
    ./epilog
    ./undercuts
    ./path2g
  ]>

  tx = turret kte
    .query do
      Xmax: kte.$.B / 2
      # Xmin: R[0][1]
      groove-depth: kte.$.h
      groove-width: kte.$.b
      bore-diameter: kte.$.A

  [down, up] = undercuts kte._, tx.tool.AR
  Z-point = down[*-1] # Start of linear segment (bottom of groove)

  prolog kte, "Tochit kanavku"
  tx.out!

  echo "N10 G96 S#{tx.tool.V} #{tx.m03!}"
  echo "N15 G00 X#{2 * kte._[0][1] - 1} Z#{2 + tx.tool.AR}"
  echo "N20 Z#{Z-point[0]}"
  echo "N25 G01 X#{2 * Z-point[1]} F#{tx.tool.F}"
  echo "N30 G01 X#{2 * kte._[0][1] - 1} F2"
  echo "N35 G01 Z#{round up[0][0]} F2"

  G-code = path2g up, 1
  echo "#{G-code.shift!} F#{tx.tool.F}"
  for line in G-code
    echo line

  echo "N50 G01 X#{2 * kte._[0][1]} F2"
  echo "N55 Z#{kte._[0][0]}"

  G-code = path2g down, 1
  echo "#{G-code.shift!} F#{tx.tool.F}"
  for line in G-code
    echo line

  echo "N65 G01 X#{2 * kte._[0][1] - 1} F2"
  echo "N70 G00 Z#{2 + tx.tool.AR} M9"
  echo "N75 G00 X#{state.job.global.D + 2} M05"

  epilog kte

function round x
  Math.round(x * 1000) / 1000
