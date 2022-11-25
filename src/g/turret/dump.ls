#
# Debug print for Turret DB queries
#
exports <<< {
  head
  input
  output
}

lines = []

var stream

function get-stream
  require! <[
    fs
    path
    ../state
  ]>
  stream ||:= if process.env.TURRET_LOGS
    fs.create-write-stream path.join that, "#{path.parse state.IO.src .name}.turret.log"
  else
    write: ->

!function head kte
  get-stream!write """
    KTE #{kte.$.id} #{Object.values kte.$
      .filter ->
        /^[a-z]/i.test it
      .join ' '}

  """

!function input line
  get-stream!write "> #{line}\n"

function output line
  get-stream!write "< #{line}\n"
  line
