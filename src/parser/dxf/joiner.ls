#
# Merge small polylines into bigger one
#
require! <[
  ../../math/point/len
  ../../math/path/reverse
]>

tolerance = 0.1 # mm

module.exports = joiner

function joiner paths
  # Build array of end points
  endpoints = []
  for path, i in paths
    endpoints.push first =
      id: i
      path: path
      last: false
      x: path[0][0]
      y: path[0][1]
    node = path[*-1]
    endpoints.push first.peer =
      id: i
      path: path
      last: true
      x: node[0]
      y: node[1]
      peer: first

  # Sort by X
  endpoints.sort by-X

  # Find nearest within tolerance
  inf = 0
  for endpoint, i in endpoints
    bound = endpoint.x - tolerance
    while inf < i and endpoints[inf].x < bound
      inf++
    bound = endpoint.x + tolerance
    i = inf
    while (other = endpoints[i++]) and other.x < bound
      if other.id == endpoint.id or tolerance < Math.abs other.y - endpoint.y
        continue
      distance = len [endpoint.x - other.x, endpoint.y - other.y]
      unless endpoint.next and endpoint.distance < distance
        endpoint.next = other
        endpoint.distance = distance

  # Drop non-symmetric neighbours
  for endpoint, i in endpoints
    if endpoint.next and endpoint.next.next != endpoint
      endpoint.next = false

  # echo yaml.safeDump endpoints
  # for endpoint in endpoints when endpoint.next
  #   echo "#{endpoint.id}#{if endpoint.last then '+' else '-'} -> #{
  #     endpoint.next.id}#{if endpoint.next.last then '+' else '-'} // #{
  #     endpoint.distance}"

  polylines = []

  !function new-poly endpoint
    p = endpoint
    polylines.push polyline = []
    loop
      p.done = p.peer.done = true
      if polyline.length
        polyline.pop()

      polyline.push ...if p.last
        reverse p.path
      else
        p.path
      unless p = p.peer.next
        return
      if p != endpoint
        continue
      # Close polyline
      polyline.pop()
      polyline.push polyline[0].slice(0, 2).concat 0
      return

  # Non-closed polylines
  for endpoint in endpoints when !endpoint.done
    if endpoint.next
      endpoint = endpoint.peer
      if endpoint.next
        continue
    new-poly endpoint

  # Closed polylines
  for endpoint in endpoints when !endpoint.done
    new-poly endpoint

  polylines.reverse!

  polylines

function by-X(a, b)
  a.x - b.x
