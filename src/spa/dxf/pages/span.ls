require! <[
  ../../m
  ../state
]>

exports <<<
  k: \span
  t: \Локально
  view: ->
    m \form,
      m nav
      m input, \Ra 'Шероховатость Ra'
      m input, \Q  'Квалитет'         "\\p{Letter}?\\d+"
      m \label,
        m \input,
          type: \checkbox
          checked: storage!thread
          onclick: !->
            storage!thread = Number @checked
        ' Резьба'
      if storage!thread
        m '',
          style:
            padding-left: \1em
          m \label,
            'Тип'
            m \br
            m \select,
              disabled: true
              onchange: !->
                storage!t$ = @selected-index
              for opt, i in <[Метрическая Дюймовая Трапецеидальная]>
                m \option,
                  selected: (storage!t$ ?= i) == i
                  opt
          m \br
          m input, \pitch 'Шаг резьбы'
          m input, \depth 'Глубина резьбы'
          m input, \xdiameter 'Внешний диаметр (для внутренней резьбы)'
          m input, \tstart 'Начало резьбы'

function storage
  state.spans[state.n-1]

input =
  view: ->
    [name, text, pattern] = it.children
    m \label,
      text
      m \br
      m \input,
        type: if pattern then \text else \number
        pattern: pattern
        step: \any
        min: 0
        value: storage![name]
        onchange: !->
          storage![name] = @value.trim!
      m \span
      m \br

nav =
  view: ->
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
