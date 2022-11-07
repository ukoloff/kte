#
#
#
module.exports = init-turret

function init-turret kte
  require! <[
    ./query
    ./out
  ]>

  result =
    kte:    kte
    id:     kte.handler.id  # Код КТЭ
    fine:   0               # Признак чистовой обработки
    mat:    77              # Код обрабатываемого материала
    dir:    \R              # Направление обработки: R / L
    # Methods
    query:  query
    out:    out

  result
