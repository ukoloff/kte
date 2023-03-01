#
# Fiddle undercut_x Zone

module.exports = split-undercut

function split-at path
  # Looking for (1st) horizontal span
  for pt, i in path
    if i > 0 and 1e-3 > Math.abs pt[1] - path[i-1][1] and 1e-3 > Math.abs path[i-1][2]
      return i - 1

function split-undercut path, tool-width
  require! <[
    ../../math/path/reverse
    ../../math/path/o2
    ../../math/o2/translation
  ]>

  k = split-at path
  up = path.slice k
  up = reverse o2 up, translation [tool-width, 0]
  up[*-1][0] -= tool-width

  return
    path.slice 0, k + 1
    up
