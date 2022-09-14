require! <[
  ../m
  ./button
  ./state
]>

exports <<<
  view: ->
    m.fragment do
      m \h1 document.title = 'Импорт геометрии из DXF'
      m \form do
        m button
      m errors if state.errors

errors =
  view: ->
    return
      m \h3 'Ошибки'
      m \ul,
        for k, v of state.errors
          m \li,
            m \b, k
            ": "
            v
