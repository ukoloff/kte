require! <[
  ../parser
]>

module.exports = process

!function process files
  seq = Promise.resolve!
  for let file in files
    <-! seq .= then
    <- file.text!then
    console.log parser it
