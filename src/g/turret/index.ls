#
#
#
module.exports = fox-pro

function fox-pro
  require! <[
    path
    child_process
    ../croak
  ]>

  unless exe = process.env.TURRET_BIN
    croak "Turret utility not specified"

  child = child_process.spawn-sync do
    exe
    cwd: path.dirname exe
    stdio: \inherit
    windows-hide: true

  if child.error
    throw that
  if child.signal
    croak "Turret utility killed with signal:", that
  if child.status != 0
    croak "Turret utility finished with error:", child.status

