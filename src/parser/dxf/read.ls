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

  do !function new-vertice
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

  !function start-block
    if this-vertex.id
      throw Error "Nested BLOCK definition"
    new-vertice!
    loop
      next!
      switch pair.id
      | 0  => return
      | 2  => this-vertex.name    =  pair.val
      | 10 => this-vertex.base[0] = +pair.val
      | 20 => this-vertex.base[1] = +pair.val

  !function new-edge
    this-vertex.edges.push edge =
      origin: [0, 0]
      # Not used so far
      scale: [1, 1]
      angle: 0
      rows: 1
      columns: 1
      cell: [0, 0]
    loop
      next!
      switch pair.id
      | 0  => return
      | 2  => edge.name = pair.val
      | 10 => edge.origin[0] = +pair.val
      | 20 => edge.origin[1] = +pair.val
      | 41 => edge.scale[0] = +pair.val
      | 42 => edge.scale[1] = +pair.val
      | 44 => edge.cell[0] = +pair.val
      | 45 => edge.cell[1] = +pair.val
      | 50 => edge.angle = +pair.val
      | 70 => edge.columns = +pair.val
      | 71 => edge.rows = +pair.val

  !function spline
    this-vertex.splines.push me =
      knots: []
      controls: []
      fits: []
    loop
      next!
      switch pair.id
      | 0  => return
      | 71 => me.degree = +pair.val
      | 40 => me.knots.push +pair.val
      | 10 => me.controls.push control = [+pair.val, 0]
      | 20 => control[1] = +pair.val
      | 11 => me.fits.push fit = [+pair.val, 0]
      | 21 => fit[1] = +pair.val

  # Read Main Loop
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
      | \BLOCK        => start-block!
      | \ENDBLK       => this-vertex = vertices[0]
      | \INSERT       => new-edge!
      | \SPLINE       => spline!

  vertices
