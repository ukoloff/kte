require! <[
  fs
  path
  ./expect
]>

context 'DXF Parser' !->
  context 'can read DXF file' !->
    for let src in discover!
      <-! specify path.basename src
      @timeout 10000  # 10 sec

      require! <[
        iconv-lite
        ../src/parser/dxf/read
        ../src/parser/dxf/splitter
      ]>

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

  specify "can process/reject splines" !->
    require! <[ ../src/parser/dxf/spline ]>

    spline.mode = false
    expect !->
      spline controls: [[], []]
    .to.throw Error

    spline.mode = true
    expect do
      spline controls: [[1, 2], [3, 4], [5, 6]]
    .to.eql [[1, 2, 0], [5, 6, 0]]

  specify "Can join polylines" !->
    require! <[ ../src/parser/dxf/joiner ]>

    expect joiner []
    .to.eql []

    expect joiner single = [[[1, 2, 3], [4, 5, 6]]]
    .to.eql single

    expect joiner [
      [[1, 2, 3], [4, 5, 6]]
      [[1, 2, -1], [7,8, 9]]]
    .to.eql [[[4, 5, -3], [1, 2, -1], [7, 8, 9]]]

    expect joiner [
      [[1, 2, 3], [4, 5, 6]]
      [[10, 20, 30], [40, 50, 60]]
      [[1, 2, -1], [7,8, 9]]]
    .to.eql [
      [[10, 20, 30], [40, 50, 60]]
      [[4, 5, -3], [1, 2, -1], [7, 8, 9]]]


  context 'generate list of paths' !->
    items = JSON.parse fs.read-file-sync path.join(data-root!, \dxf.json), \utf-8
    for let src in discover!
      <-! specify path.basename src
      @timeout 10000  # 10 sec

      require! <[
        ../src/parser/dxf
        ../src/parser/dxf/spline
        ../src/math/path/area
        ../src/math/path/perimeter
        ../src/math/path/closed
      ]>

      unless item = items[path.parse src .name]
        @skip!

      txt = fs.read-file-sync src, \utf-8

      if item.splines
        spline.mode = false
        expect !-> dxf txt
        .to.throw Error

      spline.mode = true
      paths = dxf txt
      paths = for p in paths
        count: p.length
        perimeter: perimeter p
        closed: closed p
        area: Math.abs area p

      function sort paths
        paths.sort (a, b)->
          b.perimeter - a.perimeter

      sort paths
      for p in item.paths
        p.area = Math.abs p.area
      sort item.paths

      expect paths
      .to.almost.eql item.paths

function data-root
  path.join do
    path.dirname __filename
    \dxf

function discover
  dir = fs.opendir-sync root = data-root!
  files = []
  while f = dir.read-sync!
    if f.is-file! and /[.]dxf$/i.test f.name
      files.push path.join root, f.name
  dir.close-sync!
  # Warm the cache
  for f in files
    fs.read-file f, !->
  files
