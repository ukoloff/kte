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
        accept: \.dxf
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

async function process files
  require! <[ ../../parser/dxf ]>

  delete state.errors
  for file in files
    try
      paths = dxf await file.text!
      console.log \DXF paths
      location.hash = "/dxf/edit"
      break
    catch e
      state.{}errors[file.name] = e.message
  m.redraw!
