#
# Ensure path is closed
#
require! <[
  ./closed
]>

module.exports = close

!function close path
  if path and path.length and! closed path
    path.push do
      path.[0].slice 0, 2
      .concat 0
