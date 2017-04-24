var oBotli=document.getElementById('botul').getElementsByTagName('li');
function clic(num){
	for(var i=0;i<oBotli.length;i++){
		if(num==i){
			oBotli[i].className='current';
		}else{
			oBotli[i].className='bot';
		}
	}
}