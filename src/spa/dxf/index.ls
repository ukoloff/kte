require! <[
  ../m
  ./button
  ./state
  ../errors
  ../home
]>

exports <<<
  view: ->
    return
      m \h1 document.title = 'Импорт геометрии из DXF'
      m \form do
        m button
      m errors, state
      m home
