if( "function" != typeof String.prototype.trim ){
	String.prototype.trim=function(){
		return this.replace(/(^\s*)|(\s*$)/g, "");
	}
	String.prototype.ltrim=function(){
		return this.replace(/(^\s*)/g,"");
	}
	String.prototype.rtrim=function(){
		return this.replace(/(\s*$)/g,"");
	}
}
/**
* 该映射关系可使用正则替换
* define (\S+) = Character\(\'([^\']+)\'.+
* ↓
* "$2"	:	"$1",
* 获得
*/
var charMap={
	"歩夢の日記": true,
	"陸斗": true
};

var cmdMap={
	"drawscene":[2,"show bg{2} \"{1}\""],
	//"drawbs":[1,"DrawBS {1}"],
	//"movebs":[1,"MoveBS {1}"],
	"fadebgm":[0,"stop music fadeout 1"],
	"fadescene":[0,"scene black\r\nwith dis2",1],
	"playbgm":[1,"show bg2 {1}"],
	"playse":[1,"play se \"{1}\""],
	"playvoice":[1,"voice \"{1}\""],
	"playstreamse":[1,"play se2 \"{1}\" loop"]
};
//var passerTags="ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ";
//var passerLabels="ABCDEFGHIJKLMNOPQRSTUVWXYZ";//"abcdefghijklmnopqrstuvwxyz"
function escapeImage(str){
	return str.replace("\\001","{image=image/exch001.png}");
}

function doTrans(from){
	var s2tMap={};
	var t2sMap={};
	//var slrFlag=false;
	function addLineMap(s,t){
		s2tMap[s]=t;
		var lastTgtLineNo=arguments.callee.lastTgtLineNo;
		for(var i=lastTgtLineNo?lastTgtLineNo+1:1;i<=t;i++){
			t2sMap[i]=s;
		}
		arguments.callee.lastTgtLineNo=t;
	}
	var result="";
	var lines=from.replace("\r","").split("\n");
	var tgtLineNo=0;
	addLineMap(0,0);
	var temp=lines[0].match(/([^\\]+)\.bs5$/);
	if(temp){
		result+="label "+temp[1]+":\r\n";
		tgtLineNo+=1;
	}else{
		return {
				success:false,
				errorNo:10,
				msg:"第一行必须是“;*.bs5”格式！"
		}
	}
	addLineMap(1,tgtLineNo);
	var lastIsMan=false;
	
	var paramStack=[];
	for(var i=1;i<lines.length;i++){
		var line=lines[i];
		var lineTrimed=line.trim().toLowerCase();
		if(lineTrimed==""){
			result+=lineTrimed;
		}else if(lineTrimed.charAt(0)=="_"){
			var cmd = lineTrimed.substr(1);
			var exp=cmdMap[cmd];
			if(exp){
				if(paramStack.length>1){
					result+= "# " + paramStack.slice(0,paramStack.length-1).join(" ")+"\r\n";
					tgtLineNo+=1;
				}
				if(exp[0]==1){
					result+= exp[1].replace("{1}",paramStack.pop());
				}else if(exp[0]==0){
					result+= exp[1];
				}else if(exp[0]==2){
					var p1=paramStack.pop();
					var p2=2;
					if(p1.charAt(0)=="b"){
						p2=1
					}
					result+= exp[1].replace("{1}",p1).replace("{2}",p2);
				}else{
					result+="# "+lineTrimed + " " + paramStack.join(" ");
				}
				if(exp[2]){
					tgtLineNo+=exp[2];
				}
			}else{
				result+="# "+lineTrimed + " " + paramStack.join(" ");
			}
			paramStack=[];
		}else if(charMap[lineTrimed]){//角色
			paramStack=[lineTrimed];
			lastIsMan=true;
		}else if(temp=lineTrimed.match(/\W+/)){//所有含有非数字字母下划线的全部加引号
			if(lastIsMan){
				if(paramStack.length>1){
					result+= "# " + paramStack.slice(0,paramStack.length-1).join(" ")+"\r\n";
					tgtLineNo+=1;
				}
				result+= "\""+ paramStack.pop() +"\" \""+lineTrimed+"\"";
				lastIsMan=false;
			}else{
				if(paramStack.length>0){
					result+= "# " + paramStack.join(" ")+"\r\n";
					tgtLineNo+=1;
				}
				result+="\""+lineTrimed+"\"";
			}
			paramStack=[];
		}else{
			//result+="# "+line;
			paramStack.push(lineTrimed);
		}
		if(i!=lines.length-1){
			result+="\r\n";
			tgtLineNo+=1;
		}
		addLineMap(i+1,tgtLineNo);
		if(lastIsMan && paramStack.length==0){
			lastIsMan = false;
		}
	}
	return {
		success:true,
		errorNo:0,
		msg:"转换成功！",
		srcLen:lines.length,
		text:result,
		resultLen:tgtLineNo,
		t2sMap:t2sMap,
		s2tMap:s2tMap
	};
}