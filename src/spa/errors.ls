#
# Dump state.errors if not empty
#
require! <[
  ./m
]>

exports <<<
  view: ->
    unless errs = it.attrs.errors
      return
    return
      m \h3 'Ошибки'
      m \ul,
        for k, v of errs
          m \li,
            m \b, k
            ": "
            v
