require! <[
    child_process
]>

posh = child_process.spawn-sync do
    \powershell
    <[-Command -]>
    input: """
        echo Hi
        echo there!
        pwd
        """
    encoding: \utf8

console.log posh
