require! <[ ./expect ]>

context "G-code generator" !->
  p2g = require \../src/math/path/g
  g2p = require \../src/parser/g

  context "Fuzzy test" !->
    for i til 12
      specify "##{i+1}", !->
        path =
          [0, 2 * Math.random! - 1, 0]
          [1, 2 * Math.random! - 1, 4 * Math.random! - 2]
          [2, 2 * Math.random! - 1, 0]

        expect g2p p2g path
        .to.deep.almost path, 1e-02
