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

  specify 'knows its bounds' !->
    require! <[ ../src/math/span/bounds ]>

    span =
      a: [0, 1]
      b: 0
      z: [1, 0]
    expect b = bounds span
    .to.be.almost.eql [[0, 0], [1, 1]]

    span.b = 0.1
    expect bounds span
    .to.be.almost.eql b

    span.b = -0.1
    expect bounds span
    .to.be.almost.eql b

    span.b = 0.42
    b2 = bounds span
    expect b2[1]
    .to.be.almost.eql b[1]
    expect b2[0][0]
    .to.be.eql b2[0][1]
    .and.to.be.below 0

    span.b = -0.42
    b2 = bounds span
    expect b2[0]
    .to.be.eql b[0]
    expect b2[1][0]
    .to.be.almost.eql b2[1][1]
    .and.to.be.above 1

    span.b = 1
    b2 = bounds span
    expect b2[1]
    .to.be.eql b[1]
    expect b2[0][0]
    .to.be.almost.eql b2[0][1]
    .and.to.be.almost.eql 1 / 2 - 1 / Math.sqrt 2

    span.b = -1
    b2 = bounds span
    expect b2[0]
    .to.be.eql b[0]
    expect b2[1][0]
    .to.be.almost.eql b2[1][1]
    .and.to.be.almost.eql 1 / 2 + 1 / Math.sqrt 2
