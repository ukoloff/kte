require! <[
  ../m
  ../dragdrop
  ./process
]>

dragdrop exports, process

exports <<<
  view: ->
    me = @
    return
      'Вы можете загрузить сюда:'
      m 'ul',
        m \li,
          'DXF-файл, содержащий плоский контур (половину сечения тела вращения)'
        m \li,
          'TXT-файл, полученный этой программой (для дальнейшего редактирования)'
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
        'Загрузить файл геометрии или входной файл!'
      ' ...или перетащите DXF- или TXT-файл в это окно...'
