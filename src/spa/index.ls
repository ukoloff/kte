require! <[
  ./m
  ./body
]>

set-timeout hello

!function hello
  m.mount document.body, body
