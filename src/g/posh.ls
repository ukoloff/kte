#
# Run PowerShell script
#
module.exports = PoSH

var mutex

function PoSH script
  require! <[
      child_process
      ./croak
  ]>

  unless mutex
    mutex = true
    PoSH """
      [Console]::InputEncoding=[System.Text.Encoding]::UTF8
      [Console]::OutputEncoding=[System.Text.Encoding]::UTF8
      """

  posh = child_process.spawn-sync do
    \powershell
    <[-Command -]>
    input: script
    encoding: \utf8

  if posh.status != 0
    croak "PowerShell failure ##{posh.status}"

  # return
  posh.stdout
