require! <[
  ./m
  ./head
  ./body
]>

set-timeout !->
  m.mount document.head, head
  m.mount document.body, body
