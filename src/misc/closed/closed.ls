#
# Dump all closed zones
#
require! <[
  fs
  path
  ../../home
  ../../parser
]>

tests = {}
files = []
columns = {}

vars = path.join home, 'data/var'
for f in fs.readdir-sync vars
  if \.xml != path.extname f
    continue
  id = path.parse f .name
  job = fs.read-file-sync do
    path.join vars, f
    \utf8
  job = parser job
  # tests[id] =
  zones = {}
  for kte in job when kte.$.type == 'closed'
    key = "#{kte.$.subtype}@#{kte.$.pos[0]}"
    zones[][key].push kte.$.id
    columns[key] = 1
  # console.log id, zones
  files.push id
  tests[id] = zones
# console.log(tests)

files.sort!
columns = Object.keys columns
columns.sort!

console.log "FILE,#{columns.join \, }"
for f in files
  cols = for c in columns
    (tests[f][c] || []).join \+
  console.log "#{f},#{cols.join \, }"
