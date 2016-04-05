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
function $(){
	return new base();
}
function base(){ //js中区分大小写，变量名和函数名不能同名，所以不能用var base = base();
	this.elements = [];
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

base.prototype.css = function(attr,value){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style[attr] = value;
	}
	
	return this;
}

base.prototype.html = function (str){
	for(var i=0;i<this.elements.length;i++){
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