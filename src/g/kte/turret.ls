#
# Position tools in Turret
#
module.exports = turret
<<< {reset}

var tools

function turret tool
  require! <[
    ../echo
  ]>

  unless tool.tool of tools._
    tools._[tool.tool] = tools.length
    tools.push tool
  id = tools._[tool.tool] + 1
  id = "0#{2 * id}".slice -2
  echo "(::DB::Tool: #{tool.tool})"
  echo "T#{id}#{id} (#{tool.name});"

do !function reset
  tools := []
  tools._ = {}
