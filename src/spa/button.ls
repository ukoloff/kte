require! <[
  ./m
  ./process
  ./dragdrop
]>

exports <<<
  view: ->
    me = @
    return
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

dragdrop exports, process
