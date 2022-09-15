#
# Plugin to open bundle in browser
#
require! <[
  opener
]>

module.exports = open

function open
  name: \open
  write-bundle: browser

var once

!function browser
  unless @meta.watch-mode
    return
  if once
    return
  once := true
  opener \bundle/index.html
