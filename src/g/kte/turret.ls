#
# Position tools in Turret
#
module.exports = turret

var tools
var last-pass

function turret tool
  require! <[
    ../echo
    ../state
  ]>

  if last-pass != state.pass
    last-pass := state.pass
    # Start Tools from scratch
    tools := []
    tools._ = {}

  unless tool.tool of tools._
    tools._[tool.tool] = tools.length
    tools.push tool
  id = tools._[tool.tool] + 1
  id = "0#{2 * id}".slice -2
  echo "(::DB::Tool: #{tool.tool}.)"
  echo "T#{id}#{id} (#{tool.name});"
