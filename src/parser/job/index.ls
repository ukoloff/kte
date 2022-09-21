module.exports = parse-job

function parse-job txt
  txt = txt
  .split /\r?\n|\r/
  .map (.trim!)

  for from 5 to 6
    unless /^\d+$/.test txt[..]
      throw SyntaxError "Incorrect file format @line[#{..+1}]!"
  # Span count
  N = Number txt[6]

  for from 2 to 4 when txt[..]
    unless /^\d+([.]\d*)?(e[-+]?\d+)?$/i.test txt[..]
      throw SyntaxError "Incorrect floating point value @line[#{..+1}]!"

  for til N
    unless /(,.*?){3}/.test txt[line = 7 + ..]
      throw SyntaxError "No technological data @line[#{line+1}]!"

  for to N
    unless /G\s*\d/i.test txt[line = 7 + N + ..]
      throw SyntaxError "No geometry @line[#{line+1}]!"

  require! <[ ../g ]>

  G-code =
    txt.slice 7 + N, 8 + 2 * N
    .join \\n
    |> g

# Parse CSV line
function csv s
  var L

  !function test rexp
    Z = rexp.exec s
    L += s.substring 0, Z.index
    s := s.substring Z.index + Z[0].length
    Z[0].trim!

  while s.length
    unless mode
      L = ''
      s .= trim!
    if mode < 2
      if \" == test /"|\s*,|\s*$/
        mode = 2
        continue
    else
      switch test /""?|$/
      | \" =>
        mode = 1
        continue
      | \"" =>
        L += \"
        continue
    mode = 0
    result.push L
  result
