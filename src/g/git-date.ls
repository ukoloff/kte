#
# Get date of last commit if any
#
require! <[
  child_process
  ../home
]>

module.exports = git-date

function git-date
  z = child_process.spawn-sync "git",
    <[ log -1 --format=%ci ]>
    cwd: home
    encoding: \utf-8
    windows-hide: true

  unless z.status or z.signal or z.error
    z.stdout.trim!
