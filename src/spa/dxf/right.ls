require! <[
  ../m
  ./state
  ./pages/tabs
  ./pages/span
  ./pages/global
]>

exports <<<
  view: ->
    return
      m tabs
      m global
