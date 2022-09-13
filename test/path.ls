require! <[
  ./expect
]>

context 'Polyline' !->
  specify 'can be [non-]closed' !->
    require! <[ ../src/math/path/closed ]>
    expect closed [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    .to.be.not.ok

    expect closed [[1, 2, -1], [3, 4, -1], [1, 2, 0]]
    .to.be.ok

  specify 'can go backward' !->
    require! <[ ../src/math/path/reverse ]>
    expect reverse [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    .to.eql [[7, 8, -6], [4, 5, -3], [1, 2, 0]]

    expect reverse [[3, 4, 5]]
    .to.eql [[3, 4, 0]]

    expect reverse []
    .to.eql []

  specify 'knows its perimeter' !->
    require! <[ ../src/math/path/perimeter ]>
    expect perimeter [[1, 2, -1], [3, 2, 0], [3, 3, 100]]
    .to.almost.equal Math.PI + 1

  specify 'knows its area' !->
    require! <[ ../src/math/path/area ]>

    expect area [[1, 2, -1], [3, 2, 0], [3, 3, 100]]
    .to.equal 0

    expect area [[1, 2, 0], [1, 4, 0], [2, 4, 0], [1, 2, 0]]
    .to.almost.equal 1

    expect area [[1, 2, -1], [3, 2, 0], [1, 2, 100]]
    .to.almost.equal Math.PI / 2
