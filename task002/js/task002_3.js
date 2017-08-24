dotClick();
begin();
var timer;
var index=1;
function dotClick(){
	var dotlist=document.getElementsByTagName("span");
	for(let i=0,len=dotlist.length;i<len;i++){

		dotlist[i].onclick=function(){
			var clickIndex=dotlist[i].getAttribute("data-index");
			dotlist[i].setAttribute('class','cur');
			moveElement(clickIndex);
		}

	}


}

function moveElement(currentIndex){
	var imglist=document.getElementById("imglist");
	
	var xpos=parseInt(imglist.style.left);
	
	xpos=xpos-400*(currentIndex-index);
	index=currentIndex;
	imglist.style.left=xpos+"px";

}

function animate(){
	var currentIndex=index+1;
	if(currentIndex>4){
		currentIndex=1;
	}
	moveElement(currentIndex);
	dotChange();
}

function dotChange(){
	var dotlist=document.getElementsByTagName("span");
	for(let i=0,len=dotlist.length;i<len;i++){
		if((i+1)==index){
			dotlist[i].setAttribute('class','cur');
		}else{
			dotlist[i].removeAttribute('class');
		}
	}
	
}

function begin(){
	timer=setInterval(animate,2000);
}
function stop(){
	clearInterval(timer);
}
document.getElementsByTagName("input")[0].addEventListener('click',begin,false);
document.getElementsByTagName("input")[1].addEventListener('click',stop,false);

