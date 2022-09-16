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
          style:
            white-space: \nowrap
          m \td,
            m \button,
              type: \button
              disabled: state.n == 1
              onclick: !->
                state.n = 1
              '|<<'
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
          m \td,
            m \button,
              type: \button
              disabled: state.n == state.spans.length
              onclick: !->
                state.n = state.spans.length
              '>>|'
      m input, 'Ra' 'Шероховатость Ra'
      m input, 'Q'  'Квалитет'
      m \label,
        m \input,
          type: \checkbox
          checked: storage!thread
          onclick: !->
            storage!thread = Number @checked
        ' Резьба'
      m '',
        class: \hidden unless storage!thread
        style:
          padding-left: \1em
        m \label,
          'Тип'
          m \br
          m \select,
            onchange: !->
              storage!tx = @selected-index
            for opt, i in <[Метрическая Дюймовая Трапецеидальная]>
              m \option,
                selected: (storage!tx ?= i) == i
                opt
        m \br
        m input, 'w' 'Шаг резьбы'
        m input, 'x' 'Глубина резьбы'

function storage
  state.spans[state.n-1]

input =
  view: ->
    name = it.children[0]
    text = it.children[1]
    m \label,
      text
      m \br
      m \input,
        type: \text
        value: storage![name]
        onchange: !->
          storage![name] = @value.trim!
      m \br
