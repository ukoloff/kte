#
# Last lines of KTE
#
module.exports = epilog

!function epilog kte
  require! <[
    ../echo
  ]>

  echo "G91;"   		# движение в инкриментах
  echo "G00;"		    # холостой ход
  echo "G28 X0;"    # выход по X в референтную точку 1
  echo "G28 Y0;"    # выход по Y в референтную точку 1
  echo "G28 Z0;"    # выход по Z в референтную точку 1
  echo "G97;"		    # движение в абсолютах
  echo "M01;"		    # условный останов по выбору
