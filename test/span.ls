require! <[
  ./expect
]>

context 'Span' !->
  specify 'knows its radius' !->
    require! <[ ../src/math/span/radius ]>

    expect radius do
      a: [0, 0]
      b: 1
      z: [1, 0]
    .to.be.almost.equal 0.5

    expect radius do
      a: [0, 1]
      b: -1
      z: [1, 0]
    .to.be.almost.equal 1 / Math.sqrt 2

    expect radius do
      a: [-1, 1]
      b: 1 / (1 + Math.sqrt 2)
      z: [0, 0]
    .to.be.almost.equal 1

  specify 'knows its center' !->
    require! <[ ../src/math/span/center ]>

    expect center do
      a: [1, 0]
      b: 1
      z: [0, 1]
    .to.be.almost.eql [0.5, 0.5]

    expect center do
      a: [0, 1]
      b: -1 / (1 + Math.sqrt 2)
      z: [1, 0]
    .to.be.almost.eql [0, 0]
