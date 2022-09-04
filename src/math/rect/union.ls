require! <[
  ./add
]>

module.exports = union

function union a, b
  unless a
    return b
  unless b
    return a
  add do
    add a, b[0]
    b[1]
