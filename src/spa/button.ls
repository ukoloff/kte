require! <[
  ./m
  ./process
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
        accept: \.xml
        oncreate: !->
          me.upload-button = it.dom
            ..onchange = !->
              process @files
      m \button,
        type: \button
        onclick: !->
          me.upload-button.click!
        'Загрузить результат распознавания!'
      ' ...или перетащите XML-файл в это окно...'

function oops
  false
