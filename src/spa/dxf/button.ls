require! <[
  ../m
  ../dragdrop
  ./state
]>

dragdrop exports, process

exports <<<
  view: ->
    me = @
    m.fragment do
      m \input.hidden,
        type: \file
        accept: ".dxf,.txt"
        oncreate: !->
          me.upload-button = it.dom
            ..onchange = !->
              process @files
      m \button,
        type: \button
        onclick: !->
          me.upload-button.click!
        'Загрузить файл геометрии!'
      ' ...или перетащите DXF-файл в это окно...'

!async function process files
  require! <[
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
