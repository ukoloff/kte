require! <[
  svg-pan-zoom
  ./m
  ./state
  ../math/path/svg
  ../math/rect/union
  ../math/rect/expand
  ../math/rect/viewbox
  ../math/path/bounds
]>

module.exports = draw

!function draw
  m.mount document.body, txt

txt =
  oncreate: !->
    history.push-state {}, "View #{state.name}"
    document.title .= replace /:.*/, ''
    document.title += ": #{state.name}"
    save = window.onpopstate
    window.onpopstate = !->
      window.onpopstate = save
      m.mount document.body, require \./body

    svg-pan-zoom it.dom,
      control-icons-enabled: true

  view: ->
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
            for kte, i in state.ktes
              m \path.kte,
                class: "kte-#{i % 3 + 1}"
                d: svg kte._
                m \title format-attrs kte.$
            m \path.axis,
              d: svg axis
              m \title 'Axis'

function format-attrs dict
  for k, v of dict
    "#{k}: #{v}"
  .join "\n"
