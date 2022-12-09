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

  f.write """
    Pass\tPos\t@DB\tName
    #{"#{'-' * 4}\t" * 4}

  """

  for pass, z of state.turret
    for pos, tool of z
      f.write """
          #{pass}\t#{pos}\t#{tool.tool}\t#{tool.name}

        """

  f.write "\n" * 2

  f.write """
    Pass\tPos\tAR\tF\tV\tName
    #{"#{'-' * 4}\t" * 6}

  """


  for op in state.t-ops
    f.write """
        #{op.pass}\t#{op.id}\t#{op.AR}\t#{op.F}\t#{op.V}\t#{op.name}

      """
