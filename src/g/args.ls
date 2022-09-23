#
# Parse Command Line
#
require! <[
  fs
  path
  ./state
]>

module.exports = args

!function args
  A = process.argv.slice 2
  unless A.length
    base = path.join __filename, "../../../data/var/25"
    A =
      "#{base}.txt"
      "#{base}.xml"

  if A.length != 2
    croak "Usage: node #{path.basename process.argv[1]} JOB.txt KTEs.xml"

  for f in A
    txt = fs.read-file-sync f, \utf-8
    switch f.replace /.*[.]/, '' .to-lower-case!
    | \txt =>
      state.job = txt
      |> require \../parser/job
    | \xml =>
      state.ktes = txt
      |> require \../parser
    | _ => croak "Unknown file type: #{f}"

  unless state.job
    croak "JOB not specified"
  unless state.ktes
    croak "KTEs not specified"

!function croak text
  console.error text
  process.exit 1
