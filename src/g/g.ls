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
    attrs = Object.entries kte.$
    debugger
    echo "(KTE: #{kte.$.id} #{sortBy do
      attrs.filter ->
        /^[a-z]/i.test it[1]  # Filter non-numeric values
      (.0)                  # Sort by name
    .map (.1)               # Values only
    .join ' '
    })"

  echo \%
