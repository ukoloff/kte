#
# Parse CSV line
#
module.exports = csv

function csv s
  var L
  result = []

  function test rexp
    Z = rexp.exec s
    L += s.substring 0, Z.index
    s := s.substring Z.index + Z[0].length
    Z[0].trim!

  loop
    unless mode
      L = ''
      s .= trim!
    if mode == 2
      # " ...
      switch test /""?|$/
      | \" =>
        mode = 1
        continue
      | \"" =>
        L += \"
        continue
      | _ => mode = 3
    else
      # , ...
      switch test /"|\s*,|\s*$/
      | \" =>
        mode = 2
        continue
      | "" => mode = 3
    result.push L
    if mode == 3
      return result
    mode = 0
