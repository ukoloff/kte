#
# Sort KTEs for visualisation
#
require! <[
  ./state
  ../math/path/bounds
  ../math/rect/size
  ../math/point/len
]>

module.exports = sort

!function sort
  for kte, i in state.ktes
    kte.i = i
    kte.W = len size bounds kte._
  state.ktes.sort (a, b)->
    b.W - a.W
  console.log state.ktes
