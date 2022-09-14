require! <[
  ./m
  ../homepage
  ./state
]>


exports <<<
  view: ->
    m.fragment do
      m errors if state.errors
      m \h2, 'Во время просмотра'
      m \ul,
        m \li,
          "Двигайте изображение мышкой"
        m \li,
          "Масштабируйте колёсиком мыши"
        m \li,
          "Наведите мышь на КТЭ, чтобы увидеть дополнительную информацию"

      m \h3, 'Примечания'
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

errors =
  view: ->
    m.fragment do
      m \h3 'Ошибки'
      m \ul,
        for k, v of state.errors
          m \li,
            m \b, k
            ": "
            v
