require! <[
  ../m
  ./left
  ./pages
]>

exports <<<
  view: ->
    return
      m '',
        m left
      m '',
        m pages
