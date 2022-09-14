#
# INSERT BLOCKs where appropriate
#
require! <[
  ./joiner
  ./spline
  ../../math/o2/translation
  ../../math/path/o2
]>

module.exports = explode

function explode vertices
  by-name = {[v.name, v] for v in vertices when v.name}

  !function dfs vertex
    if vertex.paths
      return
    vertex.paths = []
    paths = vertex.closed.concat do
      joiner vertex.non-closed.concat do
        for s in vertex.splines
          spline s

    for edge in vertex.edges when v2 = by-name[edge.name]
      dfs v2

      O2 = translation edge.origin
      for path in v2.paths
        paths.push o2 path, O2

    O2 = translation vertex.base
    for path, i in paths
      paths[i] = o2 path, O2

    vertex.paths = paths

  dfs vertices[0]
  vertices[0].paths
