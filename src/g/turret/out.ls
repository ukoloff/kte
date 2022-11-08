#
# Select Tool G-code
#
module.exports = out-tool

!function out-tool
  require! <[
    ../echo
  ]>

  t = @tool
  id = "??"
  echo "(::DB::Tool: #{t.tool})"
  echo "T#{id}#{id} (#{t.name});"
