require! <[
  ./m
  ../homepage
]>

exports <<<
  view: ->
    m.fragment do
      m \ul,
        m \li,
          m \a,
            href: homepage.homepage
            target: \_blank
            'Исходный код'
          '@GitHub'
