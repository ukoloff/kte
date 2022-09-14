#
# readline() for pre-read file
#

module.exports = splitter

function splitter txt
  lines = txt.split /\r?\n|\r/

  function readline
    return if lines.length
      lines.shift!
    else
      ''
