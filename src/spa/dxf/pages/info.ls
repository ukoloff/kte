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
      m \li,
        "Отрезков: #{state.spans.length}"
      if state.$.paths? and state.$.paths != 1
        m \li,
          "Найдено контуров: #{state.$.paths}"
      if state.$.axles? and state.$.axles != 1
        m \li,
          "Найдено осей: #{state.$.axles}"
      if state.$.$dir?
        m \li,
          "Используется ось #{state.$.$dir}=#{round state.$.axis}"
      m \li,
        "Размеры: #{state.size.map round .join 'x'} (\u2300#{round 2 * state.size[1]})"
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
