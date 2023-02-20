#
# Top Thread
#
module.exports = top-thread
<<<
  id: 14
  name: 'Резьба наружн'

!function top-thread kte
  require! <[
    ../state
    ../echo
    ../turret
    ./prolog
    ./epilog
  ]>

  t = kte.t[1]
  tx = turret kte
    .query do
      Xmax: kte._[0][1]
      # Xmin: kte._[0][1]
      thread-kind: 1 + t.t$ # 1 = Метрическая; 2 = Дюймовая; ...
      thread-pitch: P = t.pitch or 1
      thread-angle: switch t.t$
        case 1 => 55  # Дюймовая
        case 2 => 30  # Трапецеидальная
        case _ => 60  # Метрическая

  prolog kte, "Rezba naruzh"
  # echo "G28 U0 W0"
  tx.out!

  n = tx.tool.AR
  D = 2 * kte._[0][1]
  ap0 = 0.615 * P
  ZL0 = kte._[0][0]
  ZL0P3 = round ZL0 + 3 * P
  ZL1 = ZL0 - t.tstart
  ZL2 = if t.depth
    ZL1 - t.depth
  else
    kte._[*-1][0]
  # ap1 = D - 2 * ap0 * Math.sqrt(0.3/(n-1))

  echo "G97 S500 M04"
  echo "G00 Z#{ZL0P3}"

  for i til n
    apY = round D - 2 * ap0 * Math.sqrt((i or 0.3) / (n-1))
    echo "X#{apY}#{if i then '' else ' M08'}"
    echo "G33 X#{apY} Z#{ZL2} F#{P}"
    echo "G00 G80 X#{3 + D}"
    echo "Z#{ZL0P3}"

  # echo "G28 U0"
  # echo "G28 W0"
  echo "G00 M09"

  epilog kte

function round x
  Math.round(x * 1000) / 1000
