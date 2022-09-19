require! <[
  ../m
  ./state
  ./left
  ./pages
]>

exports <<<
  view: ->
    if state.$
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
  got = state.$
  delete state.$
  state.path = got.path
  sz = got.size
  state.global =
    id: state.name.replace /[.].*/, ''
    D: Math.ceil 2 * sz[1]
    W: Math.ceil sz[0]
  state.spans = [{} for i til state.path.length - 1]
  state.n = 1
