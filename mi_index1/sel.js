var oListnavblo=document.getElementById('listnavblo').getElementsByTagName('div');
var oListblodiv=document.getElementById('listblo').getElementsByTagName("div");
var oListblo=document.getElementById('listblo');
function hov(num){
	for(var i=0;i<oListnavblo.length;i++){
		if(num==i){
			oListblo.style.display="block";
			oListblodiv[i].style.display="block";
		}else{
			oListblodiv[i].style.display="none";
		}
	}
}
function mout(){
	oListblo.style.display="none";
}
oListblo.onmouseover=function(){
	oListblo.style.display="block";
}