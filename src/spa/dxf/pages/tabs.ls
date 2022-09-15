require! <[
  ../../m
  ../state
]>

tabs =
  global: \Общие
  local:  \Локально
  text:   \Текст

exports <<<
  view: ->

    m \.tabs,
      m \span
      for let tab, name of tabs
        return
          m \label,
            class: \active if (state.tab ?= tab) == tab
            m \input,
              type: \radio
              name: \tab
              checked: state.tab == tab
              onclick: !->
                state.tab = tab
            ' '
            name
          m \span
