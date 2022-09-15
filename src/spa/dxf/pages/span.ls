require! <[
  ../../m
  ../state
]>

exports <<<
  view: ->
    state.n ?= 108
    m \form,
      m \table,
        m \tr,
          m \td,
            m \button,
              type: \button
              onclick: !->
                state.n--
              '<<'
          m \td,
            width: \100%
            align: \center
            "#{state.n} / #{if state.DXF then that[0].length else \- }"
          m \td,
            m \button,
              type: \button
              onclick: !->
                state.n++
              '>>'
      m \label,
        'Шероховатость Ra'
        m \br
        m \input,
          type: \text
      m \br
      m \label,
        'Квалитет'
        m \br
        m \input,
          type: \text
      m \br
      m \label,
        m \input,
          type: \checkbox
          checked: state.thread
          onclick: !->
            state.thread = @checked
        ' Резьба'
      m '',
        class: \hidden unless state.thread
        style:
          padding-left: \1em
        m \label,
          'Тип'
          m \br
          m \select,
            for opt in <[Метрическая Дюймовая Трапецеидальная]>
              m \option opt
        m \br
        m \label,
          'Шаг резьбы'
          m \br
          m \input,
            type: \text
        m \br
        m \label,
          'Глубина резьбы'
          m \br
          m \input,
            type: \text
