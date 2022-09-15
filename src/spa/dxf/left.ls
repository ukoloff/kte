require! <[
  ../m
  ./state
]>

exports <<<
  view: ->
    unless state.DXF
      return

    require! <[
      ../../math/rect/union
      ../../math/rect/expand
      ../../math/rect/viewbox
      ../../math/path/bounds
      ../../math/path/svg
    ]>

    for path in state.DXF
      B = union B, bounds path
    B = expand B, 1.01

    m \svg,
      xmlns: "http://www.w3.org/2000/svg"
      view-box: viewbox B
      m \g, # For Pan&Zoom
        m \g.ktes,
          transform: "scale(1, -1)",
          for path, i in state.DXF
            m \path.kte.kte-1,
              d: svg path
              m \title "Path ##{i}"
