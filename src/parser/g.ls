#
# Parse G-code
#
require! <[
  ./g23
]>

module.exports = G

function G txt
  spans = []
  # Split by letters except E
  for token, i in txt.split /\s*((?!E)[A-Z])\s*/i
    if i % 2
      prev = token.to-upper-case!
      if prev == 'G'
        spans.push span = {}
    else if span
      span[prev] = parse-float token
  g23 spans

