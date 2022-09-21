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

  specify.only "works" !->
    job fs.read-file-sync do
      path.join __filename, "../job/08.txt"
      \utf-8
