@echo off

for /R %%s in (files\*) do (
IF not %%~xs#==# (
    echo [pass]%%s
) ELSE (
    echo [Decode]%%s
    ScriptDecoder.exe "%%s"
    rem echo [Filter]%%s.txt
    rem cscript //Nologo removeFirst.vbs "%%s.txt"
    move /Y *.txt output >nul
)
)
pause