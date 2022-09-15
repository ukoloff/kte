require! <[
  ../m
  ./state
  ./left
  ./pages
]>

exports <<<
  view: ->
    if state.DXF
      init!
    unless state.path
      location.replace '#!/dxf'
      return
    document.title = "Ввод технологических параметров: #{state.name}"
    return
      m '',
        m left
      m '',
        m pages

function init
  require! <[
    ../../math/path/bounds
    ../../math/rect/size
  ]>
  for p in state.DXF
    if !path or path.length < p.length
      path = p
  delete state.DXF
  state.path = path
  sz = size bounds path
  state.global =
    id: state.name.replace /[.].*/, ''
    D: Math.ceil 2 * sz[1]
    W: Math.ceil sz[0]
  state.spans = [{} for i til path.length - 1]
  state.n = 1
