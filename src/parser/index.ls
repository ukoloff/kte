#
# Parse KTE list in XML format
# // Result of Stage 1
#
require! <[
  easysax
]>

module.exports = parse

function parse xml
  console.log \XML xml
  new easysax
    ..on \error !->
      console.log \ERR it
    ..on \startNode ->
      console.log \TAG arguments
    ..on \endNode ->
      console.log \/TAG arguments
    ..on \textNode ->
      console.log \TEXT arguments
    ..parse xml
  void
