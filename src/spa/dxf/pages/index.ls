require! <[
  ../../m
  ../state
]>

tabs =
  require \./global
  require \./span
  require \./text
  ...

exports <<<
  view: ->
    return
      m \.tabs,
        m \span
        for let v in tabs
          return
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
            m \span

      for v in tabs
        m '',
          class: \hidden if state.tab != v.k
          m v
