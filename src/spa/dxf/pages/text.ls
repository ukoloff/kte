require! <[
  ../../m
  ../state
  ./build
]>

exports <<<
  k: \text
  t: \Результат
  view: ->
    me = @
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
        build!

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
