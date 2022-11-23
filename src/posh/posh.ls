require! <[
    child_process
]>

posh = child_process.spawn-sync do
    \powershell
    <[-Command -]>
    input: """
        Add-Type -AssemblyName System.Windows.Forms
        $FileBrowser = New-Object System.Windows.Forms.OpenFileDialog 
        $FileBrowser.filter = "TXT files|*.txt|All files|*.*"
        $null = $FileBrowser.ShowDialog()
        $FileBrowser.FileName
        """
    encoding: \utf8

console.log posh
