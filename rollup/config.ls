require! <[
  @rollup/plugin-commonjs
  @rollup/plugin-node-resolve
  @rollup/plugin-json
  rollup-plugin-terser
  ./livescript
  ./html
]>

module.exports = config

extensions = <[ .js .ls .json ]>

function config args
  input:
    view: \./src

  output:
    dir: \bundle
    format: \iife
    name: \kte
    sourcemap: true
    plugins:
      rollup-plugin-terser.terser do
        mangle: !args.watch
        format:
          max_line_len: 80
          semicolons: false
      ...

  plugins:
    plugin-json!
    livescript!
    html!
    plugin-commonjs {extensions}
    plugin-node-resolve.node-resolve {extensions}

