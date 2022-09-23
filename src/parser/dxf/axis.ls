#
# Detect axis for turning
module.exports = detect

function detect paths
  require! <[
    ../../math/point/len
    ../../math/path/bounds
    ../../math/path/close
    ../../math/path/area
    ../../math/path/reverse
    ../../math/path/o2
    ../../math/o2/cw90
    ../../math/o2/cw180
    ../../math/o2/translation
    ../../math/rect/size
  ]>
  var path-key, axis-key
  path-count = paths.length
  axis-count = 0
  # Default axis (X=0)
  axis-dir = 1
  axis-pos = 0
  for path in paths
    k =
      path.length
      len size bounds path
    if !path-key? or 0 < cmp-seq k, path-key
      best-path = path
      path-key = k
    ax = is-axis path
    unless ax?
      continue
    axis-count++
    if path.length == 2 and 1e-3 > Math.abs path[0][2]
      path-count--
    if !axis-key or 0 < cmp-seq k, axis-key
      axis-dir = ax
      axis-pos = path[0][ax]
      axis-key = k

  # Process path
  unless path-count
    throw RangeError "No contour(s) found"
  path = best-path
  delta = axis-pos
  unless axis-dir
    - = delta
    path = o2 path, cw90!
  path = o2 path, translation [0, -delta]
  close path
  if 0 > area path
    path = reverse path
  R = bounds path
  delta = -R[0][0]
  if R[0][1] + R[1][1] < 0
    path = o2 path, cw180!
    delta = R[1][0]
  path = o2 path, translation [delta, 0]

  # return
  path: path
  # size: size add R, [R[0][0], 0]
  paths: path-count
  axis: axis-pos
  dir: axis-dir
  $dir: 'ZX'.char-at axis-dir
  axles: axis-count

!function is-axis path
  require! <[
    ../../math/path/closed
  ]>
  if closed path
    return
  A = path[0]
  Z = path[* - 1]
  for til 2
    if 1e-3 > Math.abs A[..] - Z[..]
      return ..

# Compare lexicographically
function cmp-seq seq-a, seq-b
  for til Math.min seq-a.length, seq-b.length
    if cmp seq-a[..], seq-b[..]
      return that
  cmp seq-a.length, seq-b.length

function cmp a, b
  return if a == b
    0
  else if a > b
    1
  else
    -1
