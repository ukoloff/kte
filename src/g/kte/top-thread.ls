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

