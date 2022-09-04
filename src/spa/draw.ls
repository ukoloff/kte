require! <[
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

  view: ->
      m \svg,
        state.ktes.map ->
          m \path.kte,
            d: svg it._
            m \title format-attrs it.$

function format-attrs dict
  for k, v of dict
    "#{k}: #{v}"
  .join "\n"
