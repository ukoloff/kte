#
# Stage 2: Generate G-code for KTE list
#
require! <[
  ./args
  ./order
  ./side
  ./tools
]>

module.exports = run

!function run
  args!
  # console.log JSON.stringify {["#{i + 1}", order side i] for i til 2}, null, 2
  console.log JSON.stringify tools, null, 2


