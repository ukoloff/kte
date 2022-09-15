require! <[
  svg-pan-zoom
  ./m
  ./state
  ./sort
  ./dragdrop
  ./process
]>

dragdrop exports, process

exports <<<
  view: ->
    require! <[
      ../math/path/svg
      ../math/rect/union
      ../math/rect/expand
      ../math/rect/viewbox
      ../math/path/bounds
    ]>

    if state.KTEs
      # Render something to force repaint SVG
      return
        m '',
          oncreate: !->
            document.title = "Просмотр КТЭ: #{state.name}"

            state.ktes = state.KTEs
            delete state.KTEs
            sort!
            m.redraw!

    unless state.ktes
      # return m require \./empty
      location.hash = '/kte'
      return

    for kte in state.ktes when kte._
      R = union R, bounds kte._
    RX = expand R, 1.01
    R = union R, bounds axis = [[RX[0][0], 0, 0], [RX[1][0], 0, 0]]
    R = expand R, 1.01

    m \svg,
      xmlns: "http://www.w3.org/2000/svg"
      view-box: viewbox R
      oncreate: !->
        svg-pan-zoom it.dom,
          control-icons-enabled: true
      m \g, # For Pan&Zoom
        m \g.ktes,
          transform: "scale(1, -1)",
          for kte in state.ktes
            m \path.kte,
              class: "kte-#{kte.i % 3 + 1}"
              d: svg kte._
              m \title format-attrs kte.$
          m \path.axis,
            d: svg axis
            m \title 'Ось вращения'

function format-attrs dict
  for k, v of dict
    "#{k}: #{v}"
  .join "\n"
