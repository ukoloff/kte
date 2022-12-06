#
# Stage 2: Generate G-code for KTE list
#
module.exports = run

!function run
  require! <[
    fs
    path
    dotenv
    js-yaml
    ./args
    ./echo
    ./state
  ]>

  dotenv.config do
    path: path.join __filename, \../../../.env
    # debug: true

  args!
  for til 2
    half ..
    console.log "Writing NC Program to:", out = state.IO.dst.join .. + 1
    fs.write-file out, echo.all!, !->

  if state.turret
    console.log "Writing setup chart to:", out = state.IO.dst[0] + 'tools.txt'
    fs.write-file do
      out
      js-yaml.dump state.turret
      ->

!function half s
  require! <[
    ./state
    ./order
    ./side
    ./echo
    ./kte/prefix
    ./kte/suffix
  ]>
  state.pass = 1 + Number s

  # echo "%;"
  echo "(PART: #{state.job.global.id or \? });"
  echo "(ustanov #{state.pass});"
  echo!

  for kte in order side s
    prefix kte

    inc = "./kte/#{kte.$.pos}"
    switch kte.$.type
    | \semiopened => inc += 7
    | \closed => inc += "-#{kte.$.subtype ? kte.$.type}"

    handler = try require inc
      catch
        require \./kte/todo
    kte <<< {handler}
    handler kte
    suffix kte

  if /M01;?$/.test echo.last!
    echo.last echo.last!replace /M01/, 'M30'
