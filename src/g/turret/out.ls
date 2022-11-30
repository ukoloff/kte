#
# Select Tool G-code
#
module.exports = out-tool

var tools
var last-pass

!function out-tool
  require! <[
    ../echo
    ../state
  ]>

  if last-pass != state.pass
    last-pass := state.pass
    # Start Tools from scratch
    tools := []
    tools._ = {}

  t = @tool

  unless t.tool of tools._
    tools._[t.tool] = tools.length
    tools.push t

  id = tools._[t.tool] + 1
  id = "0#{2 * id}".slice -2
  echo "(::DB::Tool: #{t.tool})"
  echo "T#{id}#{id} (#{t.name});"
