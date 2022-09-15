require! <[
  ./welcome
  ./body
  ./show
  ./dxf
  ./dxf/edit
]>

exports <<<
  "/":    welcome
  "/dxf": dxf
  "/dxf/edit": edit
  "/kte": body
  "/kte/show": show
