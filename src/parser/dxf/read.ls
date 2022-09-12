#
# Read DXF
#
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

    if startDeg? and endDeg?
      # Arc
      C = [X, Y]
      angle = end-deg - start-deg
      angle -= 360 * Math.floor angle / 360
      A = dbs.point.add C, dbs.point.o2 [R, 0], dbs.o2.ccw start-deg
      A[2] = Math.tan angle * Math.PI / 720
      Z = dbs.point.add C, dbs.point.o2 [R, 0], dbs.o2.ccw end-deg
      Z[2] = 0
      this-vertex.non-closed.push [A, Z]
    else
      # Circle
      this-vertex.closed.push do
        [X - R, Y, -1],
        [X + R, Y, -1],
        [X - R, Y, 0]

  until done
    next!
    switch pair.id
    | 0  =>
      switch pair.val
      | \EOF  => done = true
      | \LINE => line!
      | \CIRCLE, \ARC => arc!

  vertices
