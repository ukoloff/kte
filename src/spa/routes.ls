require! <[
  ./welcome
  ./body
  ./draw
  ./dxf
]>

exports <<<
  "/":    welcome
  "/dxf": dxf
  "/kte": body
  "/kte/show": draw
