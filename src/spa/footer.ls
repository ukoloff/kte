require! <[
  ./m
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
