#
# Print some comments
#
module.exports = prefix

!function prefix kte
  require! <[
    lodash/sortBy
    ../echo
  ]>

  attrs = sortBy do
    Object.entries kte.$
    .filter ->
      !/id$/.test it[0]   # Skip id-attributes
    (.0.to-lower-case!)   # Sort by name

  echo "(KTE: #{kte.$.id} #{
    attrs
    .filter ->
      /^[a-z]/i.test it[1]  # Filter non-numeric values
    .map (.1)               # Values only
    .join ' '
  })"

  echo "(\t#{
    attrs
    .filter ->
      /^[-+]?\d/.test it[1] # Only numerical values
    .map ->
      "#{it[0]}=#{round it[1]}"
    .join ' '
  })"

function round x
  Math.round(x * 1000) / 1000
