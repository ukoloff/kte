require! <[
  ../point/bounds
  ../point/mul
  ../rect/add
  ./vector
  ./center
  ./radius
]>

module.exports = box

function box span
  B = add do
    bounds span.a
    span.z
  unless span.b
    return B
  # Arc
  v = vector span
  turn = [1, -span.b]
  turn = mul turn, turn
  flags = mul v, turn
  turn[0] = -turn[0]
  flags.push ...mul v, turn
  flags.push ...v
  flags.push -v[0], -v[1]
  for flag, i in flags
    flags[i] = unless flag
      0
    else if flag > 0
      +1
    else
      -1
  bits = 0
  for i to 3
    if flags[i] and flags[i] != flags[i+4]
      bits .|.= 1 .<<. i % 2 + flags[i] + 1
  unless bits
    return B
  C = center span
  R = radius span
  for i to 3
    if i == 2
      R = -R
    if bits .&. 1 .<<. i
      B[i .>>. 1][i .&. 1] = C[i .&. 1] - R
  B
