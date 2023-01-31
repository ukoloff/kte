#
# Top Thread Groove
#
module.exports = top-undercut
<<<
  id: 6
  name: 'Резьбовая канавка внешняя'

function top-undercut kte
  require! <[
    ../state
    ../echo
    ../turret
    ./prolog
    ./epilog
    ../../math/path/bounds
    ../../math/rect/size
    ../../math/span/radius
  ]>

  R = bounds kte._
  Sz = size R

  # Looking for (1st) horizontal span
  k = 0 # Index of k-point in kte._
  for pt, i in kte._
    if i > 0 and 1e-3 > Math.abs pt[1] - kte._[i-1][1] and 1e-3 > Math.abs kte._[i-1][2]
      k = i - 1
      break
  r = round radius do
    a: kte._[k+1]
    b: kte._[k+1][2]
    z: kte._[k+2]

  tx = turret kte
    .query do
      Xmax: R[1][1]
      # Xmin: R[0][1]
      groove-depth: kte.$.h
      groove-width: kte.$.b

  prolog kte, "Tochit kanavku"
  tx.out!

  echo "N10 G96 S#{tx.tool.V} #{tx.m03!}"
  echo "N15 G00 Z#{kte._[k][0]}"
  echo "N20 X#{2 * kte._[0][1]}"
  echo "N25 G01 X#{2 * kte._[k][1]} F#{tx.tool.F}"
  echo "N30 G01 X#{2 * kte._[k][1] + 2} F2"
  echo "N35 G01 Z#{R[0][0] + tx.tool.AR} F2"
  echo "N40 X#{2 * kte._[k][1] + 2 * r} F#{tx.tool.F}"
  echo "N45 G03 X#{2 * kte._[k][1]} Z#{R[0][0] + r + tx.tool.AR} I0 K#{r}"
  echo "N50 G01 X#{2 * kte._[k][1]} F2"
  echo "N55 Z#{kte._[0][0]}"
  echo "N60 G01 X#{2 * kte._[k][1]} Z#{kte._[0][0] - kte.$.h} F#{tx.tool.F}"
  echo "N70 G00 X#{state.job.global.D + 2} M9"
  echo "N75 G00 Z2 M05"

  epilog kte

function round x
  Math.round(x * 1000) / 1000
