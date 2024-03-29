#
# Build TXT
#
module.exports = build

function build
  require! <[
    ../state
    ../../../math/point/mul
    ../../../math/o2/translation
    ../../../math/o2/mirror
    ../../../math/o2/compose
    ../../../math/path/o2
    ../../../math/path/g
    ../../../math/path/reverse
  ]>
  X = state.global
  dir = X.dir
  path = state.path
  sz = state.size
  spans = state.spans
  if dir and state.mirror
    dir = Number !dir
    path = o2 do
      reverse path
      compose do
        translation [state.max-z, 0]
        mirror!
    spans .= slice!
    spans.reverse()
  """
  #{X.id or 6 * 7}
  #{X.matter or \STEEL }
  #{X.hard or 0}
  #{X.D or 3 + Math.ceil 2 * sz[1]}
  #{X.W or 4 + Math.ceil sz[0]}
  #{dir or 0}
  #{spans.length}
  #{
    for span in spans
      "#{
        span.thread or 0},#{
        Z span.Ra},,,,,#{
        Z span.tstart},#{
        Z span.xdiameter},#{
        Z span.depth},#{
        Z span.t$},#{
        Z span.pitch},#{
        Z span.Q}"
    .join "\n"
  }
  #{g path}
  """

# Format as CSV
function Z v=''
  return if /^\s|\s$|"|,/.test v
    "\"#{v.replace /"/g, '""'}\""
  else
    v
