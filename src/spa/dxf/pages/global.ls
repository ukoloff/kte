require! <[
  ../../m
  ../state
]>

exports <<<
  k: \global
  t: \Параметры
  view: ->
    state.n ?= 1
    m \form,
      m \fieldset,
        m \legend 'Начало обработки'
        for let dir, i in <[Слева Справа]>
          m \label,
            m \input,
              type: \radio
              name: \dir
              checked: (state.global.dir ?= i) == i
              onclick: ->
                state.global.dir = i
            ' '
            dir
            unless i
              ' '
            else
              m popover
      m input, \id      'Код детали'
      m input, \matter  'Материал'
      m input, \hard    'Твёрдость'         true
      m input, \D       'Диаметр заготовки' true
      m input, \W       'Длина заготовки'   true

input =
  view: ->
    storage = state.global
    [name, text, num] = it.children
    m \label,
      text
      m \br
      m \input,
        type: if num then \number else \text
        step: \any
        min: 0
        value: storage[name]
        onchange: !->
          storage[name] = @value.trim!
      m \span
      m \br

popover =
  view: ->
    m \sup.popover,
      \*
      m '',
        m \select,
          onchange: !->
            state.mirror = @selected-index
          for opt, i in ['Установкой флага 0|1', 'Отражением \u00B1Z <=>']
            m \option,
              selected: (state.mirror ?= i) == i
              opt

