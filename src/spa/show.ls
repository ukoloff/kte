require! <[
  svg-pan-zoom
  ./m
  ./state
]>

exports <<<
  oncreate: !->
    unless state.ktes
      return
    svg-pan-zoom it.dom,
      control-icons-enabled: true

    document.title = "Просмотр КТЭ: #{state.name}"

  view: ->
    require! <[
      ../math/path/svg
      ../math/rect/union
      ../math/rect/expand
      ../math/rect/viewbox
      ../math/path/bounds
    ]>

    unless state.ktes
      return m require \./empty

    for kte in state.ktes when kte._
      R = union R, bounds kte._
    RX = expand R, 1.01
    R = union R, bounds axis = [[RX[0][0], 0, 0], [RX[1][0], 0, 0]]
    R = expand R, 1.01

    m \svg,
      xmlns: "http://www.w3.org/2000/svg"
      view-box: viewbox R
      m \g, # For Pan&Zoom
        m \g,
          class: \ktes
          transform: "scale(1, -1)",
          for kte in state.ktes
            m \path.kte,
              class: "kte-#{kte.i % 3 + 1}"
              d: svg kte._
              m \title format-attrs kte.$
          m \path.axis,
            d: svg axis
            m \title 'Axis'

function format-attrs dict
  for k, v of dict
    "#{k}: #{v}"
  .join "\n"
