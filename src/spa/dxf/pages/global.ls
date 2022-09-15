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
              checked: (state.dir ?= i) == i
              onclick: ->
                state.dir = i
            ' '
            dir
            ' '
      m \label,
        'Код детали'
        m \br
        m \input,
          type: \text
      m \br
      m \label,
        'Материал'
        m \br
        m \input,
          type: \text
      m \br
      m \label,
        'Твёрдость'
        m \br
        m \input,
          type: \text
      m \br
      m \label,
        'Диаметр заготовки'
        m \br
        m \input,
          type: \text
      m \br
      m \label,
        'Длина заготовки'
        m \br
        m \input,
          type: \text
