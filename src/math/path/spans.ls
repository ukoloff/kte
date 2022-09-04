module.exports = spans

!function spans path, fn
  for vertex in path when prev
    fn do
      a: prev
      b: prev[2]
      z: vertex
    prev = vertex
