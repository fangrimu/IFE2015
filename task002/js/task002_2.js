btn=document.getElementsByTagName("input")[1];
btn.addEventListener("click",handler,false);

function handler(){
	
	var userInput=document.getElementsByClassName("aDate")[0].value;
	var isValidity=/\d{4}\-\d{2}\-\d{2}/.test(userInput);
	console.log(isValidity);
	if(isValidity===false){
		document.getElementsByTagName("p")[1].style.display="none";
		document.getElementsByTagName("h3")[0].style.display="none";
		document.getElementsByTagName("p")[0].style.display="block";
		document.getElementsByTagName("p")[0].style.color="red";
		document.getElementsByTagName("p")[0].innerHTML="请输入正确的格式";
		

		return;
		
	}else{
		setTimeout(handler, 1000);
		var dateArray=userInput.split("-");
		var date1=new Date(dateArray[0],dateArray[1],dateArray[2]);
		var date2=new Date();
		if(date2>date1){
			document.getElementsByTagName("p")[0].style.display="block";
		    document.getElementsByTagName("p")[0].style.color="red";
		    document.getElementsByTagName("p")[0].innerHTML="请输入一个未来时间";
		    return;
		}else{
			document.getElementsByTagName("p")[0].style.display="none";
			document.getElementsByTagName("p")[1].style.display="block";
			document.getElementsByTagName("h3")[0].style.display="block";
			var getTimes=date1.getTime()-date2.getTime();
			//计算出相差天数
            var days=Math.floor(getTimes/(24*3600*1000)); 
             //计算出小时数
            var leave1=getTimes%(24*3600*1000);    //计算天数后剩余的毫秒数
            var hours=Math.floor(leave1/(3600*1000));
             //计算相差分钟数
            var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
            var minutes=Math.floor(leave2/(60*1000))
 
             //计算相差秒数
			var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
			var seconds=Math.round(leave3/1000);

			var result='距离'+dateArray[0]+'年'+dateArray[1]+'月'+dateArray[2]+'日还有'+days+'天'+hours+'小时'+minutes+'分钟'+seconds+'秒';
			document.getElementsByTagName("p")[1].innerHTML=result;
		}
		
	}
		
	
}
//show();

