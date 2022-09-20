require! <[
  ../m
  ./state
]>

exports <<<
  view: ->
    unless state.path
      return

    require! <[
      ../axis
      ../../math/rect/viewbox
      ../../math/path/svg
    ]>

    ax = axis [state.path]

    m \svg,
      xmlns: "http://www.w3.org/2000/svg"
      view-box: viewbox ax.bounds
      m \g, # For Pan&Zoom
        m \g.DXF,
          m \defs,
            for ,i in state.path when i
              m \path,
                id: ":#{i}"
                d: svg state.path.slice i-1, i+1
                "vector-effect": \non-scaling-stroke  # For FireFox
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
          m \path.axis,
            d: svg ax
