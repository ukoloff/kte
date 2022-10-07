#
# Unimplemented KTE
#
module.exports = unimplemented-kte

!function unimplemented-kte kte
  require! <[
    ../echo
  ]>

  echo "(--- NOT IMPLEMENTED yet ---)"
  console.log "SKIP KTE: #{kte.$.pos} #{kte.$.type} #{kte.$.subtype or ''}"
