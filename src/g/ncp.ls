#
# Stage 2: Generate G-code for KTE list
#
module.exports = run

!function run
  require! <[
    fs
    dotenv/config
    ./args
    ./echo
    ./state
  ]>
  args!
  for til 2
    half ..
    console.log "Writing NC Program to:", out = "bundle/#{state.out-name}-#{.. + 1}.nc"
    fs.write-file out, echo.all!, !->

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
