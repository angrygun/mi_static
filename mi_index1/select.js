var oSeltit=document.getElementById('navti').getElementsByTagName('span');
var oSelcon=document.getElementById('navb').getElementsByTagName("span");
var oNavb=document.getElementById('navb');
function ho(num){
	for(var i=0;i<oSeltit.length;i++){
		if(num==i){
			oNavb.style.display="block";
			oSelcon[i].style.display="block";
		}else{
			oSelcon[i].style.display="none";
		}
	}
}
function out(){
	oNavb.style.display="none";
}
oNavb.onmouseover=function(){
	oNavb.style.display="block";
}