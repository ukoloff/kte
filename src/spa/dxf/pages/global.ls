require! <[
  ../../m
  ../state
]>

exports <<<
  k: \global
  t: \Общие
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
      m input, 'id' 'Код детали'
      m input, 'matter', 'Материал'
      m input, 'hard', 'Твёрдость'
      m input, 'D', 'Диаметр заготовки'
      m input, 'W', 'Длина заготовки'

input =
  view: ->
    storage = state.global
    name = it.children[0]
    text = it.children[1]
    m \label,
      text
      m \br
      m \input,
        type: \text
        value: storage[name]
        onchange: !->
          storage[name] = @value.trim!
      m \br

popover =
  view: ->
    m \sup.popover,
      \*
      m '',
        m \select,
          onchange: !->
            state.mirror = @selected-index
          for opt, i in ['Отражением <=>', 'Установкой флага 0|1']
            m \option,
              selected: (state.mirror ?= i) == i
              opt

