#
# Bottom Thread Closed Zone
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

  debugger
  t = kte.t[1]
  tx = turret kte
    .query do
      Xmax: kte._[0][1]
      # Xmin: kte._[0][1]
      thread-diameter: 1 + t.t$ # 1 = Метрическая; 2 = Дюймовая; ...
      thread-pitch: t.pitch or 1
      thread-angle: switch t.t$
        case 1 => 55  # Дюймовая
        case 2 => 30  # Трапецеидальная
        case _ => 60  # Метрическая

  echo "G28 U0 W0 (Rezba)"
  tx.out!
  echo "(---)"
  echo "G28 U0"
  echo "G28 W0"
  echo "G00 M09"

  epilog kte

