#
# Allow Drag&Drop for XML files
#
require! <[
  ./process
]>

module.exports = install

!function install view, handler
  view <<<
    oncreate: !->
      document.body
        ..ondragenter = oops
        ..ondragleave = oops
        ..ondragover =  oops
        ..ondrop = ->
          handler it.data-transfer.files
          false
    onremove: !->
      document.body
        ..ondragenter = null
        ..ondragleave = null
        ..ondragover = null
        ..ondrop = null

function oops
  false
