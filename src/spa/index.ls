require! <[
  ./m
  ./head
  ./body
  ./state
]>

set-timeout state.home = !->
  m.mount document.head, head
  m.mount document.body, body
