module.exports = parse-job

function parse-job txt
  debugger
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