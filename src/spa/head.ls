require! <[
  ./m
  ./css
]>

exports <<<
  view: ->
    m.fragment do
      m \style css.css
