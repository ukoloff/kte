require! <[
  fs
  path
  iconv-lite
  ./expect
  ../src/parser/dxf/read
  ../src/parser/dxf/splitter
]>

context \DXF !->
  specify 'is parsed' !->
    for src in discover!
      dxf = fs.read-file-sync src
      dxf = iconv-lite.decode dxf, \win1251
      dxf = read splitter dxf
      j = path.parse src
      j.ext = '.raw.json'
      delete j.base
      j = path.format j
      j = JSON.parse fs.read-file-sync j, \utf-8
      expect dxf
      .to.almost.eql j

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
