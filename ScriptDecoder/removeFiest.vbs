'Dim fso : set fso = CreateObject("Scripting.FileSystemObject")
'Dim BasePath : BasePath = fso.GetFile(Wscript.ScriptFullName).ParentFolder.Path & "\"
Set oArgs = WScript.Arguments
If oArgs.Count <> 1 Then
	WScript.Echo "ÓÃ·¨: {wscript | cscript} "& Wscript.ScriptName &" fileName " & vbcrlf
Else
	removeFirst(oArgs(0))
End If

Function removeFirst(fileName)
	Const adModeRead = 1
	Const adModeReadWrite = 3
	Const adModeRecursive = 4194304
	Const adModeShareDenyNone = 16
	Const adModeShareDenyRead = 4
	Const adModeShareDenyWrite = 8
	Const adModeShareExclusive = 12
	Const adModeUnknown = 0
	Const adModeWrite = 2
	
	Const adTypeBinary = 1 
	Const adTypeText = 2
	
	Const adReadAll = -1
	Const adReadLine = -2
	Const adSaveCreateNotExist = 1
	Const adSaveCreateOverWrite = 2

	Dim fso : set fso = CreateObject("Scripting.FileSystemObject")
	
	Set ADOStrm1 = CreateObject("ADODB.Stream")
	ADOStrm1.Mode = adModeShareDenyWrite
	ADOStrm1.Type = adTypeText
	ADOStrm1.CharSet = "utf-8"
	ADOStrm1.Open
	ADOStrm1.LoadFromFile fileName

	Dim of : set of=fso.GetFile(fileName)
	Dim outFile : outFile = of.ParentFolder.Path & "\" & "rp_" & of.Name

	'If Not fso.FileExists(outFile) Then
	'	fso.CreateTextFile outFile, True
	'End If
	
	Set ADOStrm2 = CreateObject("ADODB.Stream")
	ADOStrm2.Mode = adModeShareDenyRead
	ADOStrm2.Type = adTypeText
	ADOStrm2.CharSet = "utf-8"
	ADOStrm2.Open
	
	Dim cur,first
	Dim i:i=0
	do while not ADOStrm1.EOS
		cur = ADOStrm1.readText(adReadLine)
		i=i+1
		If i=1 then
			first = cur
			ADOStrm2.WriteText cur & vbCrLf
		Else
			If cur<>first Then
				ADOStrm2.WriteText cur & vbCrLf
			End if
		End if
	loop
	
	ADOStrm2.SaveToFile outFile,adSaveCreateOverWrite
	ADOStrm1.close
	Set ADOStrm1 = Nothing
	ADOStrm2.close
	Set ADOStrm2 = Nothing
End Function