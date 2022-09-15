require! <[
  ./m
  ./head
  ./routes
]>

m.mount document.head, head

# m.route.prefix = \#
m.route document.body, "/" routes
