require! <[
  ../../m
  ../state
]>

exports <<<
  k: \text
  t: \Текст
  view: ->
    m \form,
      m \button,
        type: \button
        style:
          width: \100%
        'Сохранить файл'
      m \p
      m \textarea,
        style:
          width: \100%
          box-sizing: \border-box
        rows: 27
        readonly: true
        """
        PART12-8
        23
        143
        82
        112
        0
        8
        0,2.5,0,0,0,0,0,0,0,0,0,0,
        0,2.5,0,0,0,0,0,0,0,0,2,0,
        0,2.5,0,0,0,0,0,0,0,0,2,0,
        0,2.5,0,0,0,0,0,0,0,0,1,0,
        0,2.5,0,0,0,0,0,0,0,0,1,0,
        0,2.5,0,0,0,0,0,0,0,0,1,0,
        0,2.5,0,0,0,0,0,0,0,0,3,0,
        0,2.5,0,0,0,0,0,0,0,0,0,0,
        G0X20Z100
        G1X40Z50
        G1X40Z-10
        G1X20Z-10
        G1X15Z0
        G1X10Z-10
        G1X5Z-10
        G1X5Z20
        G1X20Z100
        """
