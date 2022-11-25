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

  if A == \@
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
    } <path/to/job-file.txt>|@
    """
  process.exit 1

!function browse
  require! <[
    ./posh
  ]>

  ...

!function paths src
  if /^\d+(_\d+)?$/.test src
    src = path.join __filename, "../../../data/var", "#{src}.txt"
  dst = if process.env.NCP_OUT
    that
  else
    path.dirname src
  dst =
    path.join dst, "#{path.parse src .name}-"
    \.nc

  state.IO = {src, dst}
