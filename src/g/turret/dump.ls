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
    ../state
  ]>
  stream ||:=
    fs.create-write-stream "bundle/#{state.out-name}.turret.log"

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
