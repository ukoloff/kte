exports <<<
  k: \info
  t: \Сводка
  view: ->
    require! <[
      ../../m
      ../state
    ]>
    m \ul,
      m \li,
        "Файл: #{state.name}"
      if state.got.paths != 1
        m \li,
          "Найдено контуров: #{state.got.paths}"
      if state.got.axles != 1
        m \li,
          "Найдено осей: #{state.got.axles}"
      m \li,
        "Ось #{state.got.$dir}=#{round state.got.axis}"
      m \li,
        "Размеры: #{state.got.size.map round .join 'x'}"
      m \li,
        'Перейдите на вкладку '
        m \a,
          href: \#
          onclick: ->
            state.tab = \text
            false
          'Текст'
        ' для просмотра / сохранения результата'

function round x
  Math.round(x * 100) / 100
