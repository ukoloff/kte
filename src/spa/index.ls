require! <[
  ./m
  ./head
  ./body
  ./welcome
  ./dxf
]>

# set-timeout state.home = !->
m.mount document.head, head
  # m.mount document.body, body

# m.route.prefix = \#
m.route document.body, "/",
  "/": welcome
  "/dxf": dxf
  "/kte": body
