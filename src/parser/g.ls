#
# Parse G-code
#
module.exports = G

function G txt
  spans = []
  # Split by letters except E
  for token, i in txt.split /\s*((?!E)[A-Z])\s*/i when i
    if i % 2
      prev = token.to-upper-case!
      if prev == 'G'
        spans.push span = {}
    else if span
      span[prev] = parse-float token
  spans

