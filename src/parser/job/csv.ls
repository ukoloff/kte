#
# Parse CSV line
#
module.exports = csv

function csv s
  var L

  function test rexp
    Z = rexp.exec s
    L += s.substring 0, Z.index
    s := s.substring Z.index + Z[0].length
    Z[0].trim!

  until done
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
      | _ => done = 1
    else
      # , ...
      switch test /"|\s*,|\s*$/
      | \" =>
        mode = 2
        continue
      | "" => done = 1
    mode = 0
    L
