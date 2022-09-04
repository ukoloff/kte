require! <[
  ../point/eq
]>

module.exports = equal

function equal a, b
  if a and b
    for i til 2
      unless eq a[i], b[i]
        return false
    return true
