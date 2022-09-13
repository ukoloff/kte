require! <[
  ./expect
  ../src/math/point/eq
  ../src/math/point/o2
  ../src/math/point/add
  ../src/math/point/sub
  ../src/math/point/mul
  ../src/math/point/div
]>

context '2D Point' !->
  specify 'supports =' !->
    expect eq [1, 2], a = [1, 2]
    .to.be.ok

    expect eq a, [1, 3]
    .not.to.be.ok

    expect eq  a, a2 = o2 a
    .to.be.ok

    expect a
    .not.equal a2

    expect a
    .to.be.eql a2

  specify 'supports +/-' !->
    expect add [1, 2], [3, 4]
    .to.be.eql [4, 6]

    expect sub [9, 8], [7, 6]
    .to.be.eql [2, 2]

  specify 'supports * and /' !->
    expect mul [1, 2], 3
    .to.be.eql [3, 6]

    expect mul [4, 3], [2, 1]
    .to.be.eql [5, 10]

    expect div [12, -15], 3
    .to.be.eql [4, -5]

    expect div [5, 10], [3, -4]
    .to.be.eql [-1, 2]
