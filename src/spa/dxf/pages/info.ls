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
        "Используется ось #{state.got.$dir}=#{round state.got.axis}"
      m \li,
        "Размеры: #{state.got.size.map round .join 'x'} (\u2300#{round 2 * state.got.size[1]})"
      m \li,
        'Перейдите на вкладку '
        m \a,
          href: \#
          onclick: ->
            state.tab = \text
            false
          'Результат'
        ' для просмотра / сохранения входного файла для распознавания КТЭ'

function round x
  Math.round(x * 100) / 100
