#
# Run PowerShell script
#
module.exports = PoSH

function raw script
  require! <[
      child_process
      ./croak
  ]>
  posh = child_process.spawn-sync do
    \powershell
    <[-Command -]>
    input: script

  if posh.status != 0
    croak "PowerShell failure ##{posh.status}"

  # return
  posh.stdout

var encoding

function PoSH script
  require! <[
      iconv-lite
  ]>

  encoding ?:= raw "[Console]::InputEncoding.WebName"
    .toString!trim!

  iconv-lite.decode do
    raw iconv-lite.encode script, encoding
    encoding
  .split /\r?\n|\r/
