#
# Get order of KTE processing
#
require! <[
  ./state
]>

module.exports = order
# Side:
# false = left
# true  = right
function order side
  require! <[
    ../math/rect/union
    ../math/rect/size
    ../math/path/bounds
    ../math/path/o2
    ../math/o2/compose
    ../math/o2/translation
    ../math/o2/mirror
  ]>
  needle =
    side: if side then \right else \left

  function narrow dict
    filter needle <<<< dict

  # Tree of closed zones
  tree = {}
  for kte in narrow type: \closed when kte.$.subtype != \thread
    tree[][kte.$.parent_id].push kte

  ktes = []
  children = []

  !function add_children kte
    # DFS
    for child in tree[kte.$.id] or []
      children.push child
      add_children child

  !function add dict
    for kte in narrow dict
      ktes.push kte
      add_children kte

  # Process order
  closed-to = end-children = []
  side-children = []
  for pos in <[ end top bottom ]>
    for type in <[ opened semiopened ]>
      add {pos, type}
    closed-to.push ...children
    children = []
    closed-to = side-children
  ktes.push ...side-children
  ktes.push ...end-children

  # Thread zones
  delete needle.pos
  tree = {}
  children = []
  for kte in narrow type: \closed, subtype: \thread
    tree[][kte.$.parent_id].push kte
  for kte in ktes
    children.push ...tree[kte.$.id] || []
  ktes.push ...children

  # Z := 0
  for kte in state.ktes
    R = union R, bounds kte._
  state.job <<<
    bounds: R
    size:   size R
  O2 = if side
    translation [-R[1][0], 0]
  else
    compose do
      translation [R[0][0], 0]
      mirror!

  for kte, i in ktes
    path = o2 kte._, O2
    R = bounds path
    ktes[i] =
      $: {} <<<< kte.$ <<< Z: -R[1][0]
      _: path
      L: kte._.map (.L)

  # return
  ktes

function filter dict
  function ok kte
    for k, v of dict
      if kte.$[k] != v
        return
    true

  for kte in state.ktes when ok kte
    kte
