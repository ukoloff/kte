module.exports = process

!async function process files
  require! <[
    ../m
    ./state
    ../../parser/dxf
    ../../parser/dxf/axis
    ../../parser/job
  ]>

  delete state.errors
  for file in files
    try
      txt = await file.text!
      switch file.name.replace /.*[.]/, '' .to-lower-case!
      | \dxf => data = axis dxf txt
      | \txt => data = job  txt
      | _ => throw RangeError "Unknow file type!"
      state <<<
        _: data
        name: file.name
      location.hash = \#!/dxf/edit
      break
    catch e
      state.{}errors[file.name] = e.message
  m.redraw!
