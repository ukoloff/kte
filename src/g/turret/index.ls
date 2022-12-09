#
#
#
module.exports = init-turret

function init-turret kte
  require! <[
    ./query
    ./out
    ./Ra
    ./m03
    ../state
  ]>

  result =
    kte:    kte
    id:     kte.handler.id  # Код КТЭ
    fine:   0               # Признак чистовой обработки
    mat:    77              # Код обрабатываемого материала
    hard:   state.job.global.hard
    dir:    \R              # Направление обработки: R / L

    # Methods
    query:  query
    stage2: stage2
    out:    out
    m03:    m03

  # return
  result |> Ra

function stage2
  if @stages < 2 or @fine
    return
  @fine = 1
  @query!
  1
