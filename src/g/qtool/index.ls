#
# Query for Tool
#
module.exports = query-tool

function query-tool kte
  require! <[
    ./tools
  ]>

  dry-run!

  kte .= $
  for tool in tools
    if tool.pos != kte.pos or tool.type != kte.type
      continue
    if tool.subtype? and kte.subtype and tool.subtype != kte.subtype
      continue
    tool
  .slice 0, 2

!function dry-run
  # Run ForPro utility
  require! <[
    ../turret
  ]>
  turret!
