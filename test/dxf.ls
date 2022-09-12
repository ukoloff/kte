require! <[
  fs
  path
  ./expect
  ../src/parser/dxf/read
]>

context \DXF !->
  specify 'is parsed' !->
    console.log discover!

function discover
  dir = fs.opendir-sync root = path.join do
    path.dirname __filename
    \dxf
  files = []
  while f = dir.read-sync!
    if f.is-file! and /[.]dxf$/i.test f.name
      files.push path.join root, f.name
  dir.close-sync!
  files
