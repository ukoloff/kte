require! <[
  ./m
  ./button
  ./footer
]>

exports <<<
  view: ->
    m.fragment do
      m \h1 document.title = 'Визуализация КТЭ'
      m \form,
        m button
      m footer
