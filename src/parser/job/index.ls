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

  require! <[
    ./csv
    ../g
  ]>

  path =
    txt.slice 7 + N, 8 + 2 * N
    .join \\n
    |> g

  fields = "thread,Ra,,,,,,,depth,t$,pitch,:Q".split \,

  spans = for til N
    line = csv txt[7 + ..]
    span = {}
    for f, i in fields when f and line[i]
      span[f.replace /^:/, ''] = if /^:/.test f
        line[i]
      else
        Number line[i]
    span

  params = ":id,:matter,hard,D,W,dir".split \,
  global =
    path: path
  for p, i in params when txt[i]
    global[p.replace /^:/, ''] = if /^:/.test p
      txt[i]
    else
      Number txt[i]
  # return
  {global, spans}
