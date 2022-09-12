#
# Read DXF
#
require! <[
  ../../math/point/add
  ../../math/point/sub
  ../../math/o2/ccw
]>

module.exports = read

function read readline

  vertices = []
  var this-vertex

  do !function newVertice
    vertices.push this-vertex :=
      id: vertices.length
      base: [0, 0]
      closed: []
      non-closed: []
      splines: []
      edges: []

  var pair
  # Read next pair of lines (id + value)
  !function next
    unless /^\d+$/.test line = trim readline!
      throw Error "Invalid DXF file"
    pair :=
      id: +line
      val: trim readline!

  !function line
    loop
      next!
      switch pair.id
      | 0 =>
        this-vertex.non-closed.push [[AX, AY, 0], [ZX, ZY, 0]]
        return
      | 10 => AX = +pair.val
      | 20 => AY = +pair.val
      | 11 => ZX = +pair.val
      | 21 => ZY = +pair.val

  !function arc
    until done
      next!
      switch pair.id
      | 0  => done = true
      | 10 => X = +pair.val
      | 20 => Y = +pair.val
      | 40 => R = +pair.val
      | 50 => start-deg = +pair.val
      | 51 => end-deg = +pair.val

    if start-deg? and end-deg?
      # Arc
      C = [X, Y]
      angle = end-deg - start-deg
      angle -= 360 * Math.floor angle / 360
      A = add C, o2 [R, 0], ccw start-deg
      A[2] = Math.tan angle * Math.PI / 720
      Z = add C, o2 [R, 0], ccw end-deg
      Z[2] = 0
      this-vertex.non-closed.push [A, Z]
    else
      # Circle
      this-vertex.closed.push do
        [X - R, Y, -1],
        [X + R, Y, -1],
        [X - R, Y, 0]

  !function push-poly path, do-close
    if do-close
      path.push back = path[0].slice!
      back[2] = 0
      this-vertex.closed.push path
    else
      this-vertex.non-closed.push path

  !function new-poly
  # LWPOLYLINE
    me = []
    until done
      next!
      switch pair.id
      | 0  => done = true
      | 10 => me.push tail = [+pair.val, 0, 0] # X
      | 20 => tail[1] = +pair.val              # Y
      | 42 => tail[2] = +pair.val              # Bulge
      | 70 => closed = 1 .&. +pair.val
    push-poly me, closed

  !function old-poly
  # POLYLINE
    me = []
    until done
      next!
      switch pair.id
      | 0  => done = true
      | 70 => closed = 1 .&. +pair.val
    done = false
    loop
      switch pair.id
      | 0 =>
          unless done = \VERTEX != pair.val
            me.push tail = [0, 0, 0]
      | 10 => tail[0] = +pair.val  # X
      | 20 => tail[1] = +pair.val  # Y
      | 42 => tail[2] = +pair.val  # Bulge
      if done
        break
      next!
    push-poly me, closed

  until done
    next!
    switch pair.id
    | 0  =>
      switch pair.val
      | \EOF          => done = true
      | \LINE         => line!
      | \CIRCLE, \ARC => arc!
      | \POLYLINE     => old-poly!
      | \LWPOLYLINE   => new-poly!

  vertices
