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
  for p in state.DXF
    if !path or path.length < p.length
      path = p
  delete state.DXF
  state.path = path
  state.global = {}
  state.spans = [{} for i til path.length - 1]
  state.n = 1
