#
#
#
module.exports = run-fox-pro

function run-fox-pro params={}
  require! <[
    fs
    path
    child_process
    ../croak
    ../../parser/job/csv
  ]>

  unless exe = process.env.TURRET_BIN
    croak "Turret utility not specified"

  @ <<<< params

  line = for f in <[id fine mat hard Xmax Xmin
            grooveDepth grooveWidth
            boreDiameter boreDepth
            threadDiameter threadPitch threadAngle
            Ra dir]>
    v = "#{@[f] or 0}"
    v .= replace /"/g, \""
    if /^\s+|\s+$|"/.test v
      v = \" + v + \"
    v
  .join \,

  fs.write-file-sync do
    path.join do
      path.dirname exe
      \instr_input.txt
    line + "\n"

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

  line = fs.read-file-sync do
    path.join do
      path.dirname exe
      \Instr_rezult.txt
    \utf-8
  .split /\r?\n|\r/
  .0
  |> csv

  @tool = {[
    f.replace \: ""
    if /^:/.test f then line[i] else Number line[i]
    ] for f, i in <[tool :name AR F V]>
  }

  # return
  @
