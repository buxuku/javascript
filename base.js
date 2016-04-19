// var Base = {
// 	Id : function(id){
// 		return document.getElementById(id);
// 	},
// 	Name : function(name){
// 		return document.getElementsByName(name);
// 	},
// 	Tag : function(tag){
// 		return document.getElementsByTagName(tag);
// 	}
// }
function $(_this){
	return new base(_this);
}
function base(_this){ //js中区分大小写，变量名和函数名不能同名，所以不能用var base = base();
	this.elements = [];
	if(_this != undefined){
		this.elements[0] = _this;
	}
	this.Id = function(id){
		this.elements.push(document.getElementById(id));
		return this;
	};
	this.Name = function(name){
		var name = document.getElementsByName(name);
		for (var i = 0; i <name.length; i++) {
			this.elements.push(name[i]);
		};
		return this;
	};
	this.Tag = function(tag){
		var tags = document.getElementsByTagName(tag);
		for (var i = 0; i <tags.length; i++) {
			this.elements.push(tags[i]);
		};
		return this;
	};
}
base.prototype.getClass = function(className,id){
	var node;
	if(arguments.length==2){
		node = document.getElementById(id)
	}else{
		node = document
	}
	var all = node.getElementsByTagName("*");
	for(var i = 0;i<all.length;i++){
		if(all[i].className==className){
			this.elements.push(all[i]);
		}
	}
	return this;
}
base.prototype.getEle = function(num){
	var elements = this.elements[num];
	this.elements = [];
	this.elements[0] = elements;
	return this;
}
base.prototype.css = function(attr,value){
	for(var i=0;i<this.elements.length;i++){
		if(arguments.length == 1){
			if(typeof window.getComputedStyle != 'undefined'){//w3c
				return window.getComputedStyle(this.elements[i],null)[attr];
			}else if(typeof this.elements[i].currentStyle !='undefined'){//ie
				return this.elements[i].currentStyle[attr];
			}
		}
		this.elements[i].style[attr] = value;
	}
	
	return this;
}

base.prototype.html = function (str){
	for(var i=0;i<this.elements.length;i++){
		if(arguments.length==0){
		return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML = str;
	}
	return this;
}

base.prototype.click = function (fn){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].onclick = fn;//xhtml中事件监听函数全部用小写，所以不能写成onClick;
	}
	return this;
}

base.prototype.addClass = function(className){
	for(var i=0;i<this.elements.length;i++){
		if(!this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
		this.elements[i].className += " "+className;
		}
	}
	return this;
}
base.prototype.removeClass = function(className){
	for(var i=0;i<this.elements.length;i++){
		if(this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
		this.elements[i].className=this.elements[i].className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),'');
		}
	}
	return this;
}
base.prototype.addRule = function(num,sectionText,cssText,poision){
	var sheet = document.styleSheets[num];
	if(typeof sheet.insertRule !='undefined'){//w3c
		sheet.insertRule(sectionText+"{"+cssText+"}",poision);
	}else if(typeof sheet.addRule!='undefined'){//<=ie8
		sheet.addRule(sectionText,cssText,poision);
	}
	return this;
}
base.prototype.removeRule = function(num,index){
	var sheet = document.styleSheets[num];
	if(typeof sheet.deleteRule != 'undefined'){
		sheet.deleteRule(index);
	}else if(typeof sheet.removeRule != 'undefined'){
		sheet.removeRule(index);
	}
}

base.prototype.hover = function(over,out){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].onmouseover = over;
		this.elements[i].onmouseout = out;
	}
	return this;
}

base.prototype.show = function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display = 'block';
	}
	return this;
}

base.prototype.hide = function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display = 'none';
	}
	return this;
}

base.prototype.center = function(width,height){
	var top = document.documentElement.clientHeight;
	var left = document.documentElement.clientWidth;
		for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.top = (top-height)/2+'px';
		this.elements[i].style.left = (left-width)/2+'px';
	}
	return this;
}
base.prototype.resize = function(fn){
	window.onresize = fn;
	return this
}
base.prototype.lock = function(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	console.log(height);
	for(var i=0;i<this.elements.length;i++){
	this.elements[i].style.width = width+'px';
	this.elements[i].style.height = height+ 'px';
	this.elements[i].style.display  = 'block';
	}
}
base.prototype.unlock = function(){
	for(var i=0;i<this.elements.length;i++){
	this.elements[i].style.display  = 'none';
	}
}