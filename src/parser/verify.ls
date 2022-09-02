#
# Check validity of KTE list
#
module.exports = verify

function verify data
  unless data.length
    throw RangeError "No KTEs found"

  for kte in data
    unless kte.$
      throw TypeError "Found KTE without attributes"

  for kte in data
    if kte._
      return data

  throw Error "No geometry information found"
