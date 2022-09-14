#
# Allow Drag&Drop for XML files
#
require! <[
  ./process
]>

module.exports = install

!function install view
  view <<<
    oncreate: !->
      document.body
        ..ondragenter = oops
        ..ondragleave = oops
        ..ondragover =  oops
        ..ondrop = ->
          process it.data-transfer.files
          false
    onremove: !->
      document.body
        ..ondragenter = null
        ..ondragleave = null
        ..ondragover = null
        ..ondrop = null

function oops
  false
