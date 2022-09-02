require! <[
  ../parser
]>

module.exports = process

!async function process files
  for file in files
    try
      console.log parser await file.text!
      return
    catch e
      console.error "#{file.name}: #{e.message}"
