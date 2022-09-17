require! <[
  ../../m
  ../state
]>

exports <<<
  k: \text
  t: \Текст
  view: ->
    me = @
    X = state.global
    m \form,
      m \button,
        type: \button
        style:
          width: \100%
        onclick: !->
          download do
            state.name.replace /[.].*/, '.txt'
            me.txt.value
        'Сохранить файл'
      m \p
      m \textarea,
        style:
          width: \100%
          box-sizing: \border-box
        rows: 27
        readonly: true
        oncreate: !->
          me.txt = it.dom
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
            "#{span.thread or 0},#{Z span.Ra},,,,,,,#{Z span.x},#{Z span.tx},#{Z span.w},#{Z span.Q}"
          .join "\n"
        }
        #{G-code!}
        """

function G-code
  require! <[
    ../../../math/path/bounds
    ../../../math/point/mul
    ../../../math/o2/translation
    ../../../math/path/o2
    ../../../math/path/g
  ]>
  R = bounds state.path
  g o2 state.path, translation mul R[0], -1

# Format as CSV
function Z v=''
  return if /^\s|\s$|"|,/.test v
    "\"#{v.replace /"/g, '""'}\""
  else
    v

# https://stackoverflow.com/a/18197511
!function download filename, text
  pom = document.create-element \a
  pom.set-attribute \href "data:text/plain;charset=utf-8,#{encodeURIComponent text}"
  pom.set-attribute \download filename

  if document.create-event
    event = document.create-event \MouseEvents
    event.init-event \click true, true
    pom.dispatch-event event
  else
    pom.click!
