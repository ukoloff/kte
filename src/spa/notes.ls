require! <[
  ./m
  ../homepage
]>


exports <<<
  view: ->
    m.fragment do
      m \h2, 'Примечания'
      m \ul,
        m \li,
          m \a,
            href: homepage.homepage
            target: \_blank
            'Исходный код'
          '@GitHub'
        m \li,
          'Замечания и предложения по работе визуализатора КТЕ: ',
          m \a,
            href: issues = "#{homepage.homepage}/issues"
            target: \_blank
            issues
        m \li,
          m \a,
            href: "#{homepage.homepage}/tree/main/data"
            target: \_blank
            'Примеры'
          ' XML-файлов'
