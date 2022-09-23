context "Job back parser" !->
  require! <[
    fs
    path
    ./expect
    ../src/parser/job
  ]>

  specify "rejects" !->
    expect !->
      job fs.read-file-sync __filename, \utf-8
    .to.throw SyntaxError

  specify "works" !->
    require! <[
      ../src/math/path/area
      ../src/math/path/perimeter
    ]>

    Z = job fs.read-file-sync do
      path.join __filename, "../job/08.txt"
      \utf-8

    expect Z.global
    .eql do
      dir: 0
      id: '08'
      matter: 'A'
      hard: 1.23
      D: 75
      W: 108

    expect area Z.path
    .almost.equal 1535.05

    expect perimeter Z.path
    .almost.equal 249.368344

    expect Z.spans[1]
    .almost.eql do
      Ra: 3.6
      Q:  "P9"
      thread: 1
      t$: 0
      pitch: 2
      depth: 10
      xdiameter: 1.1
      tstart: 2.2
