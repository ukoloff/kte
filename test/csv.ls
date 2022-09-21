context "One-line CSV parser" !->
  require! <[
    ./expect
    ../src/parser/job/csv
  ]>

  specify "splits string by commas" !->
    expect csv "a,bc,d"
    .to.eql ["a", "bc", "d"]

  specify "ignores whitespaces" !->
    expect csv " a,  bc ,  d  "
    .to.eql ["a", "bc", "d"]

  specify "uses quotes" !->
    expect csv '" a",  "b""c ,  d " '
    .to.eql [" a", 'b"c ,  d ']
