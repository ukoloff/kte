require! <[
  @rollup/plugin-commonjs
  @rollup/plugin-node-resolve
  @rollup/plugin-json
  rollup-plugin-terser
  ./livescript
]>

module.exports = config

extensions = <[ .js .ls .json ]>

function config args
  # console.log \ARGS args

  input:
    view: \./src

  output:
    dir: \bundle
    format: \iife
    sourcemap: true
    plugins:
      rollup-plugin-terser.terser do
        output:
          max_line_len: 80
          semicolons: false
      ...

  plugins:
    plugin-json!
    livescript!
    plugin-commonjs {extensions}
    plugin-node-resolve.node-resolve {extensions}

