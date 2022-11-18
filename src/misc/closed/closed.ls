#
# Dump all closed zones
#
require! <[
  fs
  path
  ../../parser
]>

tests = {}

vars = path.join __filename, '../../../../data/var'
for f in fs.readdir-sync vars
  if \.xml != path.extname f
    continue
  id = path.parse f .name
  job = fs.read-file-sync do
    path.join vars, f
    \utf8
  job = parser job
  tests[id] = for kte in job when kte.$.type == 'closed'
    kte.${subtype, id, pos}
  console.log id, tests[id]
# console.log(tests)
