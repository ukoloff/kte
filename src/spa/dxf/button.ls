require! <[
  ../m
]>

exports <<<
  oncreate: !->
    document.body
      ..ondragenter = oops
      ..ondragleave = oops
      ..ondragover =  oops
      ..ondrop = ->
        process it.data-transfer.files
        false
  onremove: !->
    document.body
      ..ondragenter = null
      ..ondragleave = null
      ..ondragover = null
      ..ondrop = null
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

function oops
  false

async function process files
  require! <[ ../../parser/dxf ]>

  for file in files
    try
      paths = dxf await file.text!
      console.log \DXF paths
      return
    catch e
      console.log \ERR e.message
  m.redraw!
