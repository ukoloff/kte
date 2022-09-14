require! <[
  ./m
  ./button
  ./footer
]>

exports <<<
  view: ->
    return
      m \h1 document.title = 'Визуализация КТЭ'
      m \form,
        m button
      m footer
