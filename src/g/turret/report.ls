#
# Write Turret info
#
module.exports = turret-report

!function turret-report
  require! <[
    fs
    path
    ../state
  ]>
  console.log "Writing setup chart to:", out = state.IO.dst[0] + 'tools.txt'
  f = fs.create-write-stream out

  for pass, z of state.turret
    for pos, tool of z
      f.write("#{pass}\t#{pos}\t#{tool.tool}:\t#{tool.name}\n")
