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
    ../../math/path/o2
    ../../math/path/area
    ../../math/path/reverse
    ../../math/path/close
    ../../math/o2/translation
     ../../math/point/negate
 ]>
  for p in state.DXF
    if !path or path.length < p.length
      path = p
  delete state.DXF
  close path
  R = bounds path
  path = o2 path, translation negate R[0]
  if 0 > area path
    path = reverse path
  state.path = path
  sz = size R
  state.global =
    id: state.name.replace /[.].*/, ''
    D: Math.ceil 2 * sz[1]
    W: Math.ceil sz[0]
  state.spans = [{} for i til path.length - 1]
  state.n = 1
