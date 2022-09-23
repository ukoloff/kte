require! <[
  ../m
  ./state
  ./left
  ./pages
]>

exports <<<
  view: ->
    if state._
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

!function init
  require! <[
    ../../math/path/bounds
    ../../math/rect/size
  ]>

  got = state._
  delete state._
  state.$ = got
  R = bounds got.path
  sz = size R
  sz[1] = Math.max ...for til 2
    Math.abs R[..][1]
  state <<<
    path: got.path
    global: got.global or do
      id: state.name.replace /[.].*/, ''
      D: Math.ceil 2 * sz[1]
      W: Math.ceil sz[0]
    spans: got.spans or [{} for til state.path.length - 1]
    size: sz
    max-z: R[1][0]
    n: 1
    tab: \info
