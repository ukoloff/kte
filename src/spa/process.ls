require! <[
  ../parser
  ./state
  ./sort
  ./m
]>

module.exports = process

!async function process files
  state.name = null
  state.errors = null
  for file in files
    try
      state.ktes = parser await file.text!
      state.name = file.name
      sort!
      location.hash = \/kte/show
      return
    catch e
      state.errors ?= {}
      state.errors[file.name] = e.message
  m.redraw!
