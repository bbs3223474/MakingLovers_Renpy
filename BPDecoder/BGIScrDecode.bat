@echo off

for /R %%s in (files\*) do (
(
    bgidis.py "%%s"
    rem echo [Filter]%%s.txt
    rem cscript //Nologo removeFirst.vbs "%%s.txt"
    move /Y files\*.bpd output >nul
)
)
pause