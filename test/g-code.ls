require! <[ ./expect ]>

context "G-code parser" !->
  require! <[ ../src/parser/g ]>

  specify "parses points" !->
    expect g "G0X10Z15"
    .to.eql [[15, 10, 0]]

  specify "parses lines" !->
    expect g "G0 X10 Z15 G1 Z 25 X 20"
    .to.eql [[15, 10, 0], [25, 20, 0]]

  specify "parses arcs" !->
    expect g """
      G 0 X1 Z 2
      G2  X 3 Z2 I 1 K0
      G3  X3 Z 4 I 0 K 1


      """
    .to.eql [[2, 1, -1], [2, 3, 1], [4, 3, 0]]
