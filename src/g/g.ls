#
# Stage 2: Generate G-code for KTE list
#
require! <[
  ./args
  ./order
]>

module.exports = run

!function run
  args!
  console.log JSON.stringify {["#{i + 1}", order i] for i til 2}, null, 2


