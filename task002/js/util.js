


/*

对数组的一些操作

*/


//实现一个方法检测一个对象是否是数组
function isArray (arr){
      return arr instanceof Array;
} 


function isArray (arr){
      return Object.prototype.toString.call(arr)==="[object Array]";
} 


//Array.isArray() 方法优于 前两种
function isArray (arr){
      return Array.isArray(arr);
} 


//遍历数组
var arr=[];

 for (var i=0,len=arr.length; i < len; i++) {  //遍历数组的索引，通过索引取值
 	   console.log(arr[i]);
 }

 for(var v of arr){ //直接遍历数组的值
 	console.log(V);
 }

 //复制数组
 var arr2=arr.slice(0); //slice()方法不会影响原数组

 //数组反转
 arr.reverse();

 //数组的重新排序，适用于数组数据是字符串和数字
 function compare(val1,val2){ //升序排列
	if(val1<val2){
		return -1;
	}else if(val1>val2){
		return 1;
	}else{
		return 0;
	}
}

arr.sort(compare);

//数组的去重
function uniqArray(arr){
	var new_array=[];
	for(var i=0,len=arr.length;i<len;i++){
		if(arr.indexOf(arr[i])==i){
			new_array.push(arr[i]);
		}
	}

	return new_array;
}

function uniqArray2(arr){
	arr.sort();
	var new_array=[];
	for(var i=0,len=arr.length;i<len;i++){
		if(arr[i]!=arr[i+1]){
			new_array.push(arr[i]);
		}
	}

	return new_array;
}


var number=[10,2,3,4,5,1,2,3,4,8,6,5,0,3,9,6,2,0,6,9,9,9,9];


console.time('uniqArray');
console.log(uniqArray(number));
console.timeEnd('uniqArray');

console.time('uniqArray2')
console.log(uniqArray2(number));
console.timeEnd('uniqArray2')


//数组转换字符串

arr.join(",");


/**

对字符串的一些操作

**/

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串

function simpleTrim(str){
	//判断一个字符是否是空白符
	function isEmpty(c){
		var pattern=/\s/;
		return pattern.test(c);
	}

	for(var i=0,len=str.length;i<len && isEmpty(str[i]);i++);
	for (var j = len; j>= 0 && isEmpty(str[j-1]); j--);

	return str.substring(i,j);
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    return str.replace(/^\s+|\s+$/g,'');
}

//字符串的反转
var a='foo';
var c=a.split("").reverse().join("");
c;//oof;




// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
	var clone;
	//如果传入的值为基本类型值，如number，string，boolean,undefined,null
	if(((typeof src)!=='object')||(!src && typeof src==='object')){
		clone=src;
		return clone;
	}

    //如果传入的对象为引用类型值，如Array,需要重新构建对象，如果直接赋值，则仍然是引用的同一个对象，并不是深度克隆
	if(Array.isArray(src)){
		clone=[];
		//使用 for in 循环数组，是为了确保数组上的扩展属性也可以被复制，而for循环只能遍历数值索引
		 for(var v in src){
		 	clone[v]=arguments.callee(src[v]);
		 }


	}else{
		//如果传入的是对象{}
		clone={};
		for(var v in src){ //for in循环可以遍历对象所有可枚举的属性
			if(src.hasOwnProperty(v)){
				clone[v]=arguments.callee(src[v]);
			}
		}
	}

	return clone;
	
}
/*测试代码
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello" */

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
// 其中fn函数可以接受两个参数：item和index
function each(arr, fn) {
    for(var index=0,len=arr.length;index<len;i++){
    	fn(arr[index],index);
    }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var len=0;
	for(var v in obj){
		if(obj.hasOwnProperty(v)){
			len++;
		}
	}
	return len;
}

/**
正则表达式
*/
// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
}



/*3. DOM

3.1 任务描述

先来一些简单的，在你的util.js中完成以下任务：*/

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
	var newClassName=trim(newClassName);
    element.className=element.className+' '+newClassName;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
	var oldClassName=trim(oldClassName);
    element.className.replace(oldClassName,'');
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode===siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
}
// your implement

/*
// 判断是否为邮箱地址
验证规则：姑且把邮箱地址分成“第一部分@第二部分”这样
第一部分：由字母、数字、下划线、短线“-”、点号“.”组成，以字母开头。
第二部分：为一个域名，域名由字母、数字、域名后缀组成，
而域名后缀一般为.xxx或.xxx.xx，一区的域名后缀一般为2-3位，如cn,com,net
*/
function isEmail(emailStr){
	var pattern=/^[A-Za-z]+(\w*-*\.*)*@[A-Za-z0-9]+(\.[A-Za-z]{2,3})$/;
	return pattern.test(emailStr);
}

// 判断是否为手机号
/*
手机号码为11位，以13，15，18开头
*/
function isMobilePhone(phone) {
	var phone=phone+'';
    var pattern=/^(13|15|17|18)+[0-9]{9}$/
    return pattern.test(phone);
}



/*接下来挑战一个mini $，它和之前的$是不兼容的，它应该是document.querySelector的功能子集，
在不直接使用document.querySelector的情况下，在你的util.js中完成以下任务：*/

// 实现一个简单的Query
function $(selector) {
    var selector=trim(selector).split(' ');
    var element=document;
    for(var i=0,len=selector.length;i<len;i++){
    	switch (selector[i][0]) {
    		case '#':
    			element=element.getElementById(selector[i].substring(1));
    			break;
    		case '.':
    			element=element.getElementsByClassName(selector[i].substring(1))[0];
    			break;
    		case '[':
    			var index=selector[i].indexOf("=");
    			var elements=element.getElementsByTagName("*");
    			if(index){    				
    			    for(var j=0;j<elements.length;j++){
    				    if(elements[j].getAttribute(selector[i].substring(1,index-1))===selector[i].substring(index+1,selector[i].length-2)){
    						element=elements[j];
    						break;
    					}
    				}
    			}else{
    				for(var j=0;j<elements.length;j++){
    				    if(elements[j].getAttribute(selector[i].substring(1,selector[i].length-2))){
    				    	element=elements[j];
    				    	break;
    				    }
    			     }
    			}

    		default:
    			element=element.getElementsByTagName(selector[i])[0];
    			

    	}
    }

}