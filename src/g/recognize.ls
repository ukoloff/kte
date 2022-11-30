#
# Run Recognition utility (Stage I)
#
module.exports = run

!function run txt
  require! <[
    os
    fs
    path
    child_process
    ./croak
    ./state
  ]>

  unless exe = process.env.STAGEI_BIN
    croak "Recogntion utility not specified"

  console.log "Running KTE recognition for:", txt

  child = child_process.spawn-sync do
    exe
    [
      txt
      xml = path.join do
        os.tmpdir!
        "kte.#{"#{Math.random!}".replace /\D+/, ''}.xml"
    ]
    cwd: os.tmpdir!
    stdio: \inherit

  if child.error
    throw that
  if child.signal
    croak "Utility killed with signal:", that
  if child.status != 0
    croak "Utility finished with error:", child.status

  console.log "Parsing KTEs..."

  txt = fs.read-file-sync xml, \utf-8
  fs.unlink xml, ->
  state.ktes = txt
    |> require \../parser
