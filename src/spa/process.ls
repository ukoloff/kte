require! <[
  ../parser
  ./state
  ./m
]>

module.exports = process

!async function process files
  delete state.errors
  for file in files
    try
      state.KTEs = parser await file.text!
      state.name = file.name
      location.hash = \/kte/show
      break
    catch e
      state.{}errors[file.name] = e.message
  m.redraw!
