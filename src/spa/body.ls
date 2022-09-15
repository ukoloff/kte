require! <[
  ./m
  ./state
  ./button
  ./errors
  ./footer
]>

exports <<<
  view: ->
    return
      m \h1 document.title = 'Визуализация КТЭ'
      m \form,
        m button
      m errors, state
      m footer
