#
# Build TXT
#
module.exports = build

function build
  require! <[
    ../state
    ../../../math/path/bounds
    ../../../math/point/mul
    ../../../math/o2/translation
    ../../../math/path/o2
    ../../../math/path/g
  ]>
  R = bounds state.path
  G-code = g o2 state.path, translation mul R[0], -1

  X = state.global
  """
  #{X.id or 6 * 7}
  #{X.matter or \STEEL }
  #{X.hard or 1.0}
  #{X.D or 25.0}
  #{X.W or 50.0}
  #{X.dir or 0}
  #{state.spans.length}
  #{
    for span in state.spans
      "#{span.thread or 0},#{Z span.Ra},,,,,,,#{Z span.x},#{Z span.tx},#{Z span.w},#{Z span.Q}"
    .join "\n"
  }
  #{G-code}
  """

# Format as CSV
function Z v=''
  return if /^\s|\s$|"|,/.test v
    "\"#{v.replace /"/g, '""'}\""
  else
    v
