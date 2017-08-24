

/* //第一阶段
document.getElementsByTagName("input")[1].onclick=function show(){
	var userInputs=document.getElementsByTagName("input")[0].value;	
	var userHabbits=uniqArray(userInputs.split(",")).join(",");
	document.getElementsByTagName("p")[0].style.display="block";
	document.getElementsByTagName("textarea")[0].style.display="block";
	document.getElementsByTagName("textarea")[0].value=userHabbits;	
};*/

//第二阶段
/*var btn=document.getElementsByTagName("input")[0];
btn.onclick=function show(){
	var userInputs=document.getElementsByTagName("textarea")[0].value;
	userInputs=userInputs.replace(/[\s,，、;]+/g ," ");
	var habbitArray=uniqArray(userInputs.split(" ")).join(",");
	document.getElementsByTagName("p")[0].style.display="block";
	document.getElementsByTagName("textarea")[1].style.display="block";
	document.getElementsByTagName("textarea")[1].value=habbitArray;	
};*/

//第三阶段
var btn=document.getElementsByTagName("input")[0];
btn.onclick=function show(){
	var userInputs=document.getElementsByTagName("textarea")[0].value;
	var InputsArray=userInputs.replace(/[\s,，、;]+/g ," ").split(" ");
	if(InputsArray.length>10){
		document.getElementsByTagName("p")[0].style.display="block";
		document.getElementsByTagName("p")[0].innerHTML="您输入的爱好不能大于10个";

	}else{
		document.getElementsByTagName("p")[0].style.display="none";
		var div=document.getElementById("habbitList");
	    InputsArray=uniqArray(InputsArray);
	    var habbits="";
		for(var i=0,len=InputsArray.length;i<len;i++){
			habbits+='<input type="checkbox" id="check'+i+'"><label for="check'+i+'">'+InputsArray[i]+'</label>';
		}
		div.innerHTML=habbits;
	}
	
};