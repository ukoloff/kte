require! <[
  ../point/add
  ../point/div
]>

module.exports = center

function center R
  if R
    div do
      add R[0], R[1]
      2
