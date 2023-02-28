#
# Bottom Thread
#
module.exports = bottom-thread
<<<
  id: 15
  name: 'Резьба внутр'

!function bottom-thread kte
  require! <[
    ../state
    ../echo
    ../turret
    ./prolog
    ./epilog
  ]>

  t = kte.t[1]
  D = 2 * kte._[0][1]
  if t.xdiameter and t.xdiameter > D
    D = t.xdiameter

  tx = turret kte
    .query do
      Xmax: D / 2
      # Xmin: kte._[0][1]
      thread-kind: 1 + t.t$ # 1 = Метрическая; 2 = Дюймовая; ...
      thread-pitch: P = t.pitch or 1
      thread-angle: switch t.t$
        case 1 => 55  # Дюймовая
        case 2 => 30  # Трапецеидальная
        case _ => 60  # Метрическая
      bore-diameter: 2 * kte._[0][1]

  D -= P

  prolog kte, "Rezba vnutr"
  # echo "G28 X0"
  # echo "G28 Z0"
  tx.out!

  n = tx.tool.AR
  # n ||= 8           # Quck-n-dirty hack
  ap0 = 0.615 * P
  ZL0 = kte._[0][0]
  ZL0P3 = round ZL0 + 3 * P
  ZL1 = ZL0 - t.tstart
  ZL2 = if t.depth
    ZL1 - t.depth
  else
    kte._[*-1][0]
  # ap1 = D + 2 * ap0 * Math.sqrt(0.3/(n-1))

  echo "G97 S500 M04"
  echo "G00 Z#{ZL0P3}"
  echo "X#{D - 1} M08"

  for i til n
    apY = round D + 2 * ap0 * Math.sqrt((i or 0.3) / (n-1))
    echo "G33 X#{apY} F#{P}"
    echo "G33 X#{apY} Z#{ZL2}"
    echo "G33 X#{D - 1}"
    # echo "G80"
    echo "G00 Z#{ZL0P3}"

  # echo "G28 X0"
  # echo "G28 Z0"
  echo "G00 M9"

  epilog kte

function round x
  Math.round(x * 1000) / 1000

