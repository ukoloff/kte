#
# Bottom Semiopened Zone
#
module.exports = bottom-semiopened
<<<
  id:   10
  name: 'Полуоткрытая внутр'

!function bottom-semiopened kte
  require! <[
    ../state
    ../echo
    ./path2g
    ./skip
    ../turret
    ./prolog
    ./epilog
  ]>

  if skip kte
    return


  last = kte._[*-1]
  Rad = last[1]
  if blind = 1e-3 > Math.abs Rad
    last = kte._[*-2]
    Rad = Math.min 6, last[1]

    # TODO: Drilling
    tx = turret kte
      .query do
        id: 16    # Отверстие сверлом
        Xmax: Rad
        Xmin: Rad
        bore-diameter: 2 * Rad
        bore-depth: -last[0]

    prolog kte, "Sverlit otverstie"
    tx.out!

    echo "N10 G97 S#{Math.round 1000 * tx.tool.V / Math.PI / 2 / Rad} M04" # Not "#{tx.m03!}" !!!
    echo "N20 X0 Z2"
    echo "N30 G83 X0 Z#{kte._[*-1][0].to-fixed 3} Q#{2 * Rad} F#{tx.tool.F}"
    echo "N40 G00 G80 X#{state.job.global.D + 2} Z2 M9"
    echo "N75 M5"

  # Milling
  tx = turret kte
    .query do
      Xmax: kte._[0][1]
      Xmin: Rad
      bore-diameter: 2 * Rad
      bore-depth: -last[0]

  prolog kte, "Rastochit poluotkrituyu zonu nacherno"
  tx.out!

  echo "N10 G96 S#{tx.tool.V} #{tx.m03!}"
  echo "N20 X#{2 * last[1] - 0.5} Z2"
  echo "N30 G71 U#{tx.tool.AR} R1"

  G-code = path2g kte._, 1

  echo "N40 G71 P#{echo.N +1} Q#{echo.N G-code.length + 2} U#{if tx.stages > 1 then -0.5 else -0.05} W1 F#{tx.tool.F} S#{tx.tool.V} M8"

  echo "N50 G00 X#{2 * kte._[0][1]}"
  for line in G-code
    echo line
  echo "N60 G91 X#{2 * last[1] -  2}"

  echo "N65 G00 Z2 M9"
  echo "N70 G00 X#{x0 = state.job.global.D + 2}"
  echo "N75 M5"
  unless tx.stage2!
    epilog kte
    return

  prolog kte, "Rastochit poluotkrituyu zonu nachisto"
  tx.out!

  echo "N110 G96 S#{tx.tool.V} #{tx.m03!}"
  echo "N120 X#{2 * kte._[0][1] - 4} Z2"

  G-code = path2g kte._, 1
  echo "N130 #{G-code.shift!} F#{tx.tool.F} S#{tx.tool.V} M8;"
  for line in G-code
    echo line

  echo "N165 G00 Z2 M9"
  echo "N170 G00 X#{state.job.global.D}"
  echo "N175 M5"

  epilog kte
