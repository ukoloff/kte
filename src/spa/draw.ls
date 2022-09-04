require! <[
  ./m
  ./state
]>

module.exports = draw

!function draw
  m.mount document.body, txt

txt =
  view: ->
    m \pre JSON.stringify state.ktes, null, 2
