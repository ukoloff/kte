require! <[
  ../parser
  ./state
  ./draw
]>

module.exports = process

!async function process files
  state.name = null
  state.errors = {}
  for file in files
    try
      state.ktes = parser await file.text!
      state.name = file.name
      draw!
      return
    catch e
      console.error "#{file.name}: #{e.message}"
      state.errors[file.name] = e.message
