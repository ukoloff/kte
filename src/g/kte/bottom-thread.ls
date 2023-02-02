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
  diameter = 2 * kte._[0][1]
  if t.xdiameter and t.xdiameter > diameter
    diameter = t.xdiameter

  tx = turret kte
    .query do
      Xmax: diameter / 2
      # Xmin: kte._[0][1]
      thread-kind: 1 + t.t$ # 1 = Метрическая; 2 = Дюймовая; ...
      thread-pitch: P = t.pitch or 1
      thread-angle: switch t.t$
        case 1 => 55  # Дюймовая
        case 2 => 30  # Трапецеидальная
        case _ => 60  # Метрическая
      bore-diameter: 2 * kte._[0][1]

  prolog kte, "Rezba vnutr"
  echo "G28 X0"
  echo "G28 Z0"

  echo "(---)"

  echo "G28 X0"
  echo "G28 Z0"
  echo "G00 M9"
