require! <[
  ../../m
  ../state
]>

exports <<<
  k: \span
  t: \Локально
  view: ->
    m \form,
      m \table,
        m \tr,
          m \td,
            m \button,
              type: \button
              onclick: !->
                unless --state.n
                  state.n = state.spans.length
              '<<'
          m \td,
            width: \100%
            align: \center
            "#{state.n} / #{state.spans.length}"
          m \td,
            m \button,
              type: \button
              onclick: !->
                state.n %= state.spans.length
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
          checked: storage!thread
          onclick: !->
            storage!thread = @checked
        ' Резьба'
      m '',
        class: \hidden unless storage!thread
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

function storage
  state.spans[state.n-1]
