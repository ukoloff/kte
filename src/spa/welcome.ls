require! <[
  ./m
]>

exports <<<
  view: ->
    m.fragment do
      m \h1 document.title = 'Automatic CAM for Turning'
      m \ul,
        m \li,
          m \a,
            href: '#!/dxf'
            'Импорт DXF и настройка технологических параметров'
        m \li,
          m \a,
            href: '#!/kte'
            'Просмотр результатов распознавания КТЭ'

