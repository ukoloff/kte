require! <[
    child_process
]>

# Set encoding
child_process.spawn-sync do
    \powershell
    <[-Command -]>
    input: """
        [Console]::InputEncoding=[System.Text.Encoding]::UTF8
        [Console]::OutputEncoding=[System.Text.Encoding]::UTF8
        """

posh = child_process.spawn-sync do
    \powershell
    <[-Command -]>
    input: """
        Add-Type -AssemblyName System.Windows.Forms
        $FileBrowser = New-Object System.Windows.Forms.OpenFileDialog 
        $FileBrowser.filter = "TXT files|*.txt|All files|*.*|Все файлы|*.*"
        $FileBrowser.ShowDialog()
        $FileBrowser.FileName
        """
    encoding: \utf8

console.log posh
