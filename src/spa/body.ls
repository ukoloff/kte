require! <[
  ./m
  ../homepage
]>

exports <<<
  view: ->
    m.fragment do
      m \h1 document.title = 'Визуализация КТЭ'
      m \form,
        m \button,
          type: \button
          disabled: !true
          'Загрузить результат распознавания!'
        ' ...или перетащите XML-файл в это окно...'
      m \hr
      m \ul,
        m \li,
          m \a,
            href: homepage.homepage
            target: \_blank
            'Исходный код'
          '@GitHub'
