require! <[
  ../../m
  ../state
]>

exports <<<
  k: \text
  t: \Текст
  view: ->
    X = state.global
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
        #{X.id or 6 * 7}
        #{X.matter or \STEEL }
        #{X.hard or 1.0}
        #{X.D or 25.0}
        #{X.W or 50.0}
        #{X.dir or 0}
        #{state.spans.length}
        #{
          for span in state.spans
            "#{span.tread or 0},#{Z span.Ra},,,,,,,#{Z span.x},#{Z span.tx},#{Z span.w},#{Z span.Q}"
          .join "\n"
        }
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

function Z v
  v ? ''
