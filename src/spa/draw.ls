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
      m \pre JSON.stringify state.ktes.map(KTE), null, 2

function KTE kte
  $: kte.$
  _: svg kte._
