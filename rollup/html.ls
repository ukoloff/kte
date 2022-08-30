module.exports = html

function html options = {}
  name: \html
  generate-bundle: make-html

!function make-html output, bundle
  for , file of bundle when file.is-entry
    @emit-file do
      type: \asset
      source: build-html file.file-name
      file-name: \index.html
    break

function build-html url
  template
    .replace "{{1}}", " src='#{url}'"

template = """
<!DOCTYPE html>
<html><head>
<meta charset="utf8">
</head><body>
<script{{1}}></script>
</body></html>

"""
