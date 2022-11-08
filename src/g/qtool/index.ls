#
# Query for Tool
#
module.exports = query-tool

function query-tool kte
  require! <[
    ./tools
    ../turret
  ]>

  # Run FoxPro utility
  # turret kte
  #   .query!

  kte .= $
  for tool in tools
    if tool.pos != kte.pos or tool.type != kte.type
      continue
    if tool.subtype? and kte.subtype and tool.subtype != kte.subtype
      continue
    tool
  .slice 0, 2
