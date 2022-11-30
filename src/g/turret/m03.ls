#
# Turn spindle on
#
module.exports = turn-on

function turn-on
  if @dir != \R
    \M04
  else
    \M03
