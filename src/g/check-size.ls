#
# Test if part fits into workpiece
#
module.exports = check-size

!function check-size
  require! <[
    ./state
    ./croak
  ]>

  state.job
    size = ..size
    g = ..global
  if size[0] < g.W and size[1] < g.D / 2
    return
  croak "Деталь (#{size.join 'x'}) меньше заготовки (#{g.W}x#{g.D / 2})"
