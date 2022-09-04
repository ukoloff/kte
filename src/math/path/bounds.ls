require! <[
  ./spans
  ../span/bounds
  ../rect/union
]>

module.exports = box

function box path
  var B
  spans path, !->
    B := union B, bounds it
  B
