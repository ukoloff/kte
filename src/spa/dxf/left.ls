require! <[
  ../m
  ./state
]>

exports <<<
  view: ->
    unless state.path
      return

    require! <[
      ../../math/rect/expand
      ../../math/rect/viewbox
      ../../math/path/bounds
      ../../math/path/svg
    ]>

    B = bounds state.path
    B = expand B, 1.01

    m \svg,
      xmlns: "http://www.w3.org/2000/svg"
      view-box: viewbox B
      m \g, # For Pan&Zoom
        m \g.DXF,
          m \defs,
            for ,i in state.path when i
              m \path,
                id: ":#{i}"
                d: svg state.path.slice i-1, i+1
          if state.tab == \span
            m \use,
              href: "#:#{state.n}"
              class: \active
          for let ,i in state.path when i
            m \use,
              href: "#:#{i}"
              onclick: !->
                state.n = i
                state.tab = 'span'

