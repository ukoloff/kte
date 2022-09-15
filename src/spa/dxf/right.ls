require! <[
  ../m
  ./state
]>

exports <<<
  view: ->
    me = @
    me.n ?= 108
    m \form,
      m \table,
        m \tr,
          m \td,
            m \button,
              type: \button
              onclick: !->
                me.n--
              '<<'
          m \td,
            width: \100%
            align: \center
            "#{me.n} / #{if state.DXF then that[0].length else \- }"
          m \td,
            m \button,
              type: \button
              onclick: !->
                me.n++
              '>>'
      m \label,
        'Ra'
        m \br
        m \input,
          type: \text
