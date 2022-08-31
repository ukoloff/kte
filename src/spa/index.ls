require! <[
  ./m
  ./head
  ./body
]>

set-timeout hello

!function hello
  m.mount document.head, head
  m.mount document.body, body
