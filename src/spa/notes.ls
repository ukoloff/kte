require! <[
  ./m
  ../homepage
]>

exports <<<
  view: ->
    return
      m \h2, 'Примечания'
      m \ul,
        m \li,
          m \a,
            href: homepage._
            target: \_blank
            'Исходный код'
          '@GitHub'
        m \li,
          'Замечания и предложения по работе утилит КТЕ: ',
          m \a,
            href: issues = "#{homepage._}/issues"
            target: \_blank
            issues
        m \li,
          m \a,
            href: "#{homepage._}/tree/main/data"
            target: \_blank
            'Примеры'
          ' DXF и XML-файлов'
