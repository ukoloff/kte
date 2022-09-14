#
# Convert spline to polyline
#
module.exports = spline

#
# Spline processing
# false:    Refuse to process splines
# true:     Convert to LINE
# function: Use to convert to polyline
#
spline.mode = false

function spline Spline
  unless \function == typeof handler = spline.mode
    handler = if handler
      to-line
    else
      bail-out
  handler Spline

function to-line spline
  controls = spline.controls
  return
    controls[0].concat 0
    controls[*-1].concat 0


function bail-out
  throw TypeError "SPLINE found!"
