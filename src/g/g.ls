#
# Stage 2: Generate G-code for KTE list
#
module.exports = run

!function run
  require! <[
    ./args
    ./echo
  ]>
  args!
  for til 2
    half ..

  console.log 'NC Program'
  console.log echo.all!

!function half s
  require! <[
    lodash/sortBy
    ./state
    ./order
    ./side
    ./echo
  ]>
  echo \%
  echo "(PART: #{state.job.global.id or \?})"
  echo "(PASS: #{1 + Number s})"

  for kte in order side s
    attrs = sortBy do
      Object.entries kte.$
      .filter ->
        !/id$/.test it[0]   # Skip id-attributes
      (.0)                  # Sort by name
    debugger
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
        "#{it[0]}=#{it[1]}"
      .join ' '
    })"

  echo \%
