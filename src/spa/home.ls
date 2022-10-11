#
# Link to Home page
#
exports <<<
  view: ->
    require! <[
      ./m
    ]>

    m 'span',
      'Вернуться в ',
      m \a,
        href: \#
        'начало'
