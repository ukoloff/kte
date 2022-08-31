#
# Parse KTE list in XML format
# // Result of Stage 1
#
require! <[
  easysax
  ./g
]>

module.exports = parse

tags = <[
  recognition_result
  kte
  contour
]>

function parse xml
  stack = []
  KTEs = []
  var state

  !function update-state
    state := 0
    if stack.length > tags.length
      return
    for tag, i in stack
      if tag != tags[i]
        return
    state := stack.length

  new easysax
    ..on \error !->
      console.log \ERR it

    ..on \startNode (tag, attrs)!->
      stack.push tag
      update-state!
      if state == 2
        # <kte>
        KTEs.push $: attrs!

    ..on \endNode !->
      unless stack.length and stack[*-1] == it
        return
      stack.pop!
      update-state!

    ..on \textNode (txt, un-entities)!->
      if state == 3
        # <contour>
        KTEs[*-1]._ ?= g <| un-entities txt .trim!

    ..parse xml
  KTEs
