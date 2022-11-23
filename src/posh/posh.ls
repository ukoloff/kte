require! <[
    child_process
]>

posh = child_process.spawn-sync do
    \powershell
    <[-Command -]>
    input: """
        [Console]::OutputEncoding=[System.Text.Encoding]::GetEncoding("utf-8")
        Add-Type -AssemblyName System.Windows.Forms
        $FileBrowser = New-Object System.Windows.Forms.OpenFileDialog 
        $FileBrowser.filter = "TXT files|*.txt|All files|*.*|Все файлы|*.*"
        $FileBrowser.ShowDialog() | Out-Null
        $FileBrowser.FileName
        """
    encoding: \utf8

console.log posh
