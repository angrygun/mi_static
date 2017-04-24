var oListnavblo=document.getElementById('listnavblo').getElementsByTagName('div');
var oListblodiv=document.getElementById('listblo').getElementsByTagName("div");
var oListblo=document.getElementById('listblo');
var oAllsel=document.getElementById('allsel');
var oListnavbloc=document.getElementById('listnavblo');
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
function mout1(){
	oListblo.style.display="none";
	oListnavbloc.style.display='none';
}
oListblo.onmouseover=function(){
	oListblo.style.display="block";
	oListnavbloc.style.display='block';
}
oAllsel.onmouseover=function(){
	oListnavbloc.style.display='block';
}
oAllsel.onmouseout=function(){
	oListnavbloc.style.display='none';
}
oListnavbloc.onmouseover=function(){
	oListnavbloc.style.display='block';
}
oListnavbloc.onmouseout=function(){
	oListnavbloc.style.display='none';
	oListblo.style.display='none';
}