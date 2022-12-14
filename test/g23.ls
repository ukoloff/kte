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

  specify "preserves unknown attributes" !->
    expect dst = g23 [{G: 0, X: 1, Z: 2, L: 3}]
    .to.almost.eql [[2, 1, 0]]
    expect dst[0].L
    .to.equal 3

  specify "works for smaller arcs" !->
    expect g23 [{G: 0, X: 11.5, Z: 12}, {G: 2, X: 12.5, Z: 12 - Math.sqrt(3), I: 2, K: 0}]
    .to.almost.eql [[12, 11.5, -2 + Math.sqrt 3], [12 - Math.sqrt(3), 12.5, 0]]
