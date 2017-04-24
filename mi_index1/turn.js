var li1=document.getElementById("banul").getElementsByTagName("li");
var bl1=document.getElementById("bl1");
var obj=setInterval("loop()",3000);
function loop(){
	for(var i=0;i<li1.length;i++){
		if(li1[i].className=="bl"){
			if(i+1==li1.length){
				var nextli=li1[0];
			}else{
				var nextli=li1[i+1];
			}
		}
	}
	blo(nextli);
}

function blo(nextli){
	bl1.src=nextli.attributes["tgr"].value;
	for(var i=0;i<li1.length;i++){
		li1[i].className="n";
	}
	nextli.className="bl";
}
function over(num){
	for(var i=0;i<li1.length;i++){
		if(num==i){
			bl1.src=li1[i].attributes["tgr"].value;
			li1[i].className="bl";
		}else{
			li1[i].className="n";
		}
	}
}
bl1.onmouseover=function(){
	clearInterval(obj);
}
 bl1.onmouseout=function(){
	obj=setInterval("loop()",3000);
 }