var Datas=['ab','abc','abcd','abcde','mn','mnb'];
var inputBox=document.getElementsByTagName('input')[0];
var search=document.getElementById('search');
var suggestbox=document.getElementById('suggestbox');

var suggestData=[];
function doSuggest(){
	var userInput=trim(inputBox.value);
	//var userInput=event.data;
	if(userInput.length>0){
		for(let i=0,len=Datas.length;i<len;i++){
			
			if(Datas[i][0]===userInput){
				suggestData.push(Datas[i]);
			}
		}
	}
	
	var result='';
	for(let i=0,len=suggestData.length;i<len;i++){
			result+='<div value="'+suggestData[i]+'" style="width:170px;cursor: pointer;border:1px solid gray;border-top:0px">'+suggestData[i]+'</div>';
		}

	
	suggestbox.innerHTML=result;
	suggestbox.style.display="block";

    for(let i of (suggestbox.childNodes)){
    		i.onmouseover=function(){
    			i.setAttribute('class','highlight');
    		}
    		i.onmouseout=function(){
    			i.removeAttribute('class');
    		}
    		i.onclick=function(){
    			inputBox.value=i.getAttribute('value');
    		}
    		 i.onkeydown=function(event){
    			if(event.keyCode==13){
    				i.click();    				
    			}
    			event.stopPropagation();
    		 } 				
    		
    		
    }

}

inputBox.addEventListener('keyup',doSuggest,false);
inputBox.onkeyup=null;
//inputBox.addEventListener('textInput',doSuggest,false);


