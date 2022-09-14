require! <[
  ../m
  ./button
]>

exports <<<
  view: ->
    m.fragment do
      m \h1 document.title = 'Импорт геометрии из DXF'
      m \form do
        m button
