var leftBox=document.getElementById('leftbox');
var rightBox=document.getElementById('rightbox');
var dragElements=document.getElementsByClassName('dragelement');

for(var i=0,len=dragElements.length;i<len;i++){
    var onDragElem=dragElements[i];
    onDragElem.setAttribute('draggable','true');
    onDragElem.ondragstart=function(e){//拖拽开始事件-当被拖拽元素开始被拖拽时触发
        e.dataTransfer.effectAllowed = 'move';//用来指定当元素被拖放时所允许的视觉效果,该属性只有在dragstart下才有用；
        e.dataTransfer.setData("text", e.target.innerHTML);//拖拽元素的dragstart初始化相关的数据信息,如果不设置setdate的话，
        //在firefox里拖拽事件是无效的。第一个属性值是说明数据信息的数据类型；第二个属性是具体数据；
        onDragElem.style.opacity=0.5;

    };
    onDragElem.ondragend=function(e){
                e.target.style.opacity=1;
    };

    //dragenter,dragover,dragleave,drop的目标元素都是被放置的目标位置
    if(onDragElem.parentNode.id==='leftbox'){
        rightBox.ondragenter=function(e){
            e.dataTransfer.dropEffect='move';
            e.preventDefault();
            
        };
        rightBox.ondragover = function(e){
            e.preventDefault(); // 这样才能触发drop的drop事件
        };
        rightBox.ondrop=function(e){
            alert(onDragElem.parentNode.id);
            e.preventDefault();//为了让firefox支持，如果不取消默认行为，firefox会打开放置目标上的URL；
            var div=document.createElement('div');
            div.innerHTML=e.dataTransfer.getData('text');
            rightBox.appendChild(div);
            leftBox.removeChild(onDragElem);
            
        }
    }
    if(onDragElem.parentNode.id==='rightbox'){
        leftBox.ondragenter=function(e){
            e.dataTransfer.dropEffect='move';
            e.preventDefault();
            
        };
        leftBox.ondragover = function(e){
            e.preventDefault(); // 这样才能触发drop的drop事件
        };
        leftBox.ondrop=function(e){
            e.preventDefault();//为了让firefox支持，如果不取消默认行为，firefox会打开放置目标上的URL；
            var div=document.createElement('div');
            div.innerHTML=e.dataTransfer.getData('text');
            leftBox.appendChild(div);
            rightBox.removeChild(onDragElem);
            
        }
    }

    
}
