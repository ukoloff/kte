require! <[
  ../parser
  ./state
]>

module.exports = process

!async function process files
  state.name = null
  state.errors = {}
  for file in files
    try
      console.log parser await file.text!
      state.name = file.name
      return
    catch e
      console.error "#{file.name}: #{e.message}"
      state.errors[file.name] = e.message
