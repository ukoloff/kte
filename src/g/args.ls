#
# Parse Command Line
#
require! <[
  fs
  path
  ./state
  ./recognize
]>

module.exports = args

!function args
  A = process.argv.slice 2

  unless A.length
    if process.env.LATHE_JOB
      A.push that

  if A.length != 1
    Help!

  A = A[0]

  if A == \:
    browse!
  else
    paths A

  console.log "Reading:", state.IO.src
  state.job = fs.read-file-sync state.IO.src, \utf-8
    |> require \../parser/job

  recognize state.IO.src

!function Help
  console.log """Usage: #{
    process.argv
      .slice 0, 2
      .map ->
        path.parse it .name
      .join ' '
    } <path/to/job-file.txt>|:
    """
  process.exit 1

!function browse
  require! <[
    ./posh
  ]>

  console.log "Please, select Job-file (in TXT format) for processing..."
  src = posh """
    Add-Type -AssemblyName System.Windows.Forms
    $d = New-Object System.Windows.Forms.OpenFileDialog
    $d.Title = "Open JOB file"
    $d.filter = "Job files (*.txt)|*.txt|All files|*.*"
    $d.ShowDialog()
    $d.FileName
    """
  if src[0] != 'OK'
    process.exit!
  src .= 1
  dst = path.resolve if process.env.NCP_OUT
    that
  else
    path.dirname src
  dst = path.join dst, "#{path.parse src .name}-1"
  console.log "Select file(s) to save NCP..."
  dst = posh """
    Add-Type -AssemblyName System.Windows.Forms
    $d = New-Object System.Windows.Forms.SaveFileDialog
    $d.Title = "Save NCP file(s)"
    $d.DefaultExt = "nc"
    $d.filter = "NCP files (*.nc)|*.nc|All files|*.*"
    $d.FileName = "#{dst}"
    $d.ShowDialog()
    $d.FileName
    """
  if dst[0] != 'OK'
    process.exit!
  dst .= 1
  dst =
    path.join do
      path.dirname dst
      "#{path.parse dst .name.replace /(-\d+)$/, ''}-"
    path.extname dst
  state.IO = {src, dst}

!function paths src
  if /^\d+(_\d+)?$/.test src
    src = path.join __filename, "../../../data/var", "#{src}.txt"
  dst = path.resolve if process.env.NCP_OUT
    that
  else
    path.dirname src
  dst =
    path.join dst, "#{path.parse src .name}-"
    \.nc

  state.IO = {src, dst}
