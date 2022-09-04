require! <[
  svg-pan-zoom
  ./m
  ./state
  ../math/path/svg
]>

module.exports = draw

!function draw
  m.mount document.body, txt

txt =
  oncreate: !->
    history.push-state {}, "View #{state.name}"
    document.title += ": #{state.name}"
    save = window.onpopstate
    window.onpopstate = !->
      window.onpopstate = save
      m.mount document.body, require \./body

    svg-pan-zoom it.dom,
      control-icons-enabled: true

  view: ->
      m \svg,
        xmlns: "http://www.w3.org/2000/svg"
        # viewport: "-10 -60 110 25"
        # height: \100%
        # width: \100%
        m \g, # For Pan&Zoom
          m \g,
            class: \ktes
            transform: "scale(1, -1)",
            state.ktes.map ->
              m \path.kte,
                d: svg it._
                m \title format-attrs it.$

function format-attrs dict
  for k, v of dict
    "#{k}: #{v}"
  .join "\n"
