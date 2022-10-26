#
# Cry and exit
#
module.exports = croak

!function croak text
  console.error text
  process.exit 1
