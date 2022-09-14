#
# No KTEs view
#
require! <[
  ./m
]>

exports <<<
  view: ->
    return
      m \h1, 'Нет данных для отображения'
      m \ul,
        m \li,
          m \a,
            href: "#!/kte"
            'Вернуться к загрузке XML-файла с результатом распознавания'
        m \li,
          m \a,
            href: "#"
            'Вернуться в начало'
