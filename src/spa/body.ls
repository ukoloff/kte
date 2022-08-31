require! <[
  ./m
  ../homepage
  ./button
]>

exports <<<
  view: ->
    m.fragment do
      m \h1 document.title = 'Визуализация КТЭ'
      m \form,
        m button
      m \hr
      m \ul,
        m \li,
          m \a,
            href: homepage.homepage
            target: \_blank
            'Исходный код'
          '@GitHub'
