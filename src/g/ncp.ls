#
# Stage 2: Generate G-code for KTE list
#
module.exports = run

!function run
  require! <[
    ./args
    ./echo
  ]>
  args!
  for til 2
    half ..

  console.log 'NC Program'
  console.log echo.all!

!function half s
  require! <[
    ./state
    ./order
    ./side
    ./echo
    ./kte/prefix
    ./kte/suffix
  ]>
  echo \%
  echo "(PART: #{state.job.global.id or \? })"
  echo "(PASS: #{1 + Number s})"

  for kte in order side s
    prefix kte

    inc = "./kte/#{kte.$.pos}"
    switch kte.$.type
    | \semiopened => inc += 7
    | \closed => inc += "-#{kte.$.subtype ? kte.$.type}"

    handler = try require inc
      catch
        require \./kte/todo
    handler kte
    suffix kte

  echo \%
