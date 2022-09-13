require! <[
  ./expect
  ../src/math/path/closed
  ../src/math/path/reverse
]>

context 'Polyline' !->
  specify 'can be [non-]closed' !->
    expect closed [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    .to.be.not.ok

    expect closed [[1, 2, -1], [3, 4, -1], [1, 2, 0]]
    .to.be.ok

  specify 'can go backward' !->
    expect reverse [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    .to.eql [[7, 8, -6], [4, 5, -3], [1, 2, 0]]

    expect reverse [[3, 4, 5]]
    .to.eql [[3, 4, 0]]

    expect reverse []
    .to.eql []
