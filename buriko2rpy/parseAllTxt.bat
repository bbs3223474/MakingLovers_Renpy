@echo off

title �ݹ�ת���ļ�

echo ��ʼת����
echo.
for /R %%s in (files\*.txt) do (
	cscript //Nologo buriko2rpy.wsf "%%s"
	echo.
)
echo ת��������
echo.
pause