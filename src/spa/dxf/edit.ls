require! <[
  ../m
  ./left
  ./right
]>

exports <<<
  view: ->
    return
      m '',
        m left
      m '',
        m right
