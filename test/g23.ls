require! <[
  ./expect
  ../src/parser/g23
]>

context "G-code math" !->

  specify "creates vertices" !->
    expect g23 [{G: 0, X: 1, Z: 2}]
    .to.almost.eql [[2, 1, 0]]

  specify "creates segments" !->
    expect g23 [{G: 0, X: 1, Z: 2}, {G: 1, Z: 3, X: 4}]
    .to.almost.eql [[2, 1, 0], [3, 4, 0]]

  specify "creates CW arcs" !->
    expect g23 [{G: 0, X: 15, Z: 25}, {G: 2, X: 20, Z: 20, I: 5, K: 0}]
    .to.almost.eql [[25, 15, 1 - Math.sqrt 2], [20, 20, 0]]

  specify "creates CCW arcs" !->
    expect g23 [{G: 0, X: 20, Z: 20}, {G: 3, X: 25, Z: 15, I: 0, K: -5}]
    .to.almost.eql [[20, 20, -1 + Math.sqrt 2], [15, 25, 0]]

  specify "creates complement CCW arcs" !->
    expect g23 [{G: 0, X: 15, Z: 25}, {G: 3, X: 20, Z: 20, I: 5, K: 0}]
    .to.almost.eql [[25, 15, 1 + Math.sqrt 2], [20, 20, 0]]

  specify "creates complement CW arcs" !->
    expect g23 [{G: 0, X: 20, Z: 20}, {G: 2, X: 25, Z: 15, I: 0, K: -5}]
    .to.almost.eql [[20, 20, -1 - Math.sqrt 2], [15, 25, 0]]
