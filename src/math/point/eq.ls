module.exports = eq

function eq a, b
  for i til 2
    if a[i] != b[i]
      return false
  return true
