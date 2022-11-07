#
# Calculate Ra & T for KTE
#
module.exports = min-Ra

function min-Ra query
  require! <[
    lodash/map
    lodash/min
    lodash/compact
  ]>

  Ts = query.kte.t
  Ra = Ts
    .map (.Ra)
    |> compact
    |> min
  T = Ts
    .map (.Q)
    .map ->
      if /^[a-z]?(\d+)$/i.exec it
        Number that[1]
    |> compact
    |> min
  query.stages = if T and T <=11 or Ra and Ra <= 6
    2
  else
    1
  # return
  query
