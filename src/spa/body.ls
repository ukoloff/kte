require! <[
  ../m
]>

exports <<<
  view: ->
    m.fragment do
      m \h1 document.title = 'Визуализация КТЭ'
      m \form,
        m \button,
          disabled: true
          'Загрузить результат распознавания'


