require! <[
  @rollup/plugin-commonjs
  @rollup/plugin-node-resolve
  @rollup/plugin-json
  rollup-plugin-styles
  rollup-plugin-terser
  ./livescript
  ./html
  ./open
]>

module.exports = config

extensions = <[ .js .ls .json .styl ]>

function config args
  input:
    view: \./src

  output:
    dir: \bundle
    format: \iife
    sourcemap: true
    freeze: false
    plugins:
      open!
      !args.watch and rollup-plugin-terser.terser do
        format:
          max_line_len: 80
          semicolons: false
      ...

  plugins:
    rollup-plugin-styles do
      minimize: true
    plugin-json!
    livescript!
    html!
    plugin-commonjs {extensions}
    plugin-node-resolve.node-resolve {extensions}

