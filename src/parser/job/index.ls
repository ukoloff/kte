module.exports = parse-job

function parse-job txt
  txt = txt
  .split /\r?\n|\r/
  .map (.trim!)

  for from 5 to 6
    unless /^\d+$/.test txt[..]
      throw SyntaxError "Incorrect file format @line[#{..}]!"
  # Span count
  N = Number txt[6]

  for from 2 to 4 when txt[..]
    unless /^\d+([.]\d*)?(e[-+]?\d+)?$/i.test txt[..]
      throw SyntaxError "Incorrect floating point value @line[#{..}]!"

  for til N
    unless /(,.*?){3}/.test txt[line = 7 + ..]
      throw SyntaxError "No technological data @line[#{line}]!"

  for to N
    unless /G\s*\d/i.test txt[line = 7 + N + ..]
      throw SyntaxError "No geometry @line[#{line}]!"
