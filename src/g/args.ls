#
# Parse Command Line
#
require! <[
  fs
  path
  ./state
  ./croak
  ./recognize
]>

module.exports = args

!function args
  A = process.argv.slice 2

  unless A.length
    A.push process.env.LATHE_JOB || \01

  if A.length == 1 and /^\d+$/.test A[0]
    base = path.join __filename, "../../../data/var/#{A[0]}"
    A =
      "#{base}.txt"
      ...

  if A.length != 1
    croak "Usage: node #{path.basename process.argv[1]} JOB.txt"

  state.out-name = path.parse A[0] .name

  console.log "Reading:", A[0]
  state.job = fs.read-file-sync A[0], \utf-8
    |> require \../parser/job

  recognize A[0]
