require! <[
  fs
  path
  js-yaml
]>

module.exports = js-yaml.load fs.read-file-sync do
  path.join __filename, \../tools.db.yml
  \utf-8
