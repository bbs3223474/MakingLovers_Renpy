@echo off

for /R %%s in (files\*) do (
(
    bpdis.py "%%s"
    rem echo [Filter]%%s.txt
    rem cscript //Nologo removeFirst.vbs "%%s.txt"
    move /Y files\*.bpd output >nul
)
)
pause