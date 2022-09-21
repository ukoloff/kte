require! <[
  svg-pan-zoom
  ./m
  ./state
  ./sort
  ./dragdrop
  ./process
]>

dragdrop exports, process

exports <<<
  view: ->
    require! <[
      ./axis
      ../math/path/svg
      ../math/rect/viewbox
    ]>

    if state.KTEs
      # Render something to force repaint SVG
      return
        m '',
          oncreate: !->
            document.title = "Просмотр КТЭ: #{state.name}"

            state.ktes = state.KTEs
            delete state.KTEs
            sort!
            m.redraw!

    unless state.ktes
      location.replace '#!/kte'
      return

    ax = axis [kte._ for kte in state.ktes when kte._]

    m \svg,
      xmlns: "http://www.w3.org/2000/svg"
      view-box: viewbox ax.bounds
      oncreate: !->
        svg-pan-zoom it.dom,
          control-icons-enabled: true
      m \g, # For Pan&Zoom
        m \g.ktes,
          transform: "scale(1, -1)",
          for kte in state.ktes
            m \path.kte,
              class: "kte-#{kte.i % 3 + 1}"
              d: svg kte._
              m \title format-attrs kte.$
          m \path.axis,
            d: svg ax
            m \title 'Ось вращения'

function format-attrs dict
  list = [[k.to-lower-case!, k, v] for k, v of dict]
  list.sort (a, b)->
    if a[0] > b[0]
      1
    else
      -1
  A = []
  M = []
  Z = []
  for item in list
    (if /id$/.test item[0]
      A
    else if /^\s*[-+]?[.\d]/.test item[2]
      Z
    else
      M
    ).push item
  A.push ...M
  A.push ...Z
  for item in A
    "#{item[1]}: #{item[2]}"
  .join "\n"
