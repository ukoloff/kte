#
#
#
module.exports = mirror

function mirror axis
  require! <[ ./eye ]>

  axis = Number !!axis
  eye!
    - = ..[axis][axis]

