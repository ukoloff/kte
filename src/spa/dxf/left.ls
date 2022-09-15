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
        m \g.ktes,
          transform: "scale(1, -1)",
          m \path.kte.kte-1,
            d: svg state.path
