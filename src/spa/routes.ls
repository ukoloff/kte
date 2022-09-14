require! <[
  ./welcome
  ./body
  ./show
  ./dxf
]>

exports <<<
  "/":    welcome
  "/dxf": dxf
  "/kte": body
  "/kte/show": show
