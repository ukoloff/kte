require! <[
  ../../m
  ../state
]>

tabs =
  require \./info
  require \./global
  require \./span
  require \./text
  ...

exports <<<
  view: ->
    return
      m \.tabs,
        for let v in tabs
          return
            m \span
            m \label,
              class: \active if (state.tab ?= v.k) == v.k
              m \input,
                type: \radio
                name: \tab
                checked: state.tab == v.k
                onclick: !->
                  state.tab = v.k
              ' '
              v.t

      for v in tabs when state.tab == v.k
        m '',
          m v
