require! <[
  assert
  ../src/parser/g23
]>

context "G-code math" !->

  specify "creates vertices" !->
    assert.deep-equal do
      g23 [{G: 0, X: 1, Z: 2}]
      [[2, 1, 0]]

  specify "creates segments" !->
    assert.deep-equal do
      g23 [{G: 0, X: 1, Z: 2}, {G: 1, Z: 3, X: 4}]
      [[2, 1, 0], [3, 4, 0]]

  specify "creates CW arcs" !->
    assert.deep-equal do
      g23 [{G: 0, X: 15, Z: 25}, {G: 2, X: 20, Z: 20, I: 5, K: 0}]
      [[25, 15, 1 - Math.sqrt 2], [20, 20, 0]]

  specify "creates CCW arcs" !->
    assert.deep-equal do
      g23 [{G: 0, X: 20, Z: 20}, {G: 3, X: 25, Z: 15, I: 0, K: -5}]
      [[20, 20, -1 + Math.sqrt 2], [15, 25, 0]]

  specify.skip "creates complement CCW arcs" !->
    assert.deep-equal do
      g23 [{G: 0, X: 15, Z: 25}, {G: 3, X: 20, Z: 20, I: 5, K: 0}]
      [[25, 15, 1 + Math.sqrt 2], [20, 20, 0]]

  specify.skip "creates complement CW arcs" !->
    assert.deep-equal do
      g23 [{G: 0, X: 20, Z: 20}, {G: 2, X: 25, Z: 15, I: 0, K: -5}]
      [[20, 20, -1 - Math.sqrt 2], [15, 25, 0]]
