var Base = {
	Id : function(id){
		return document.getElementById(id);
	},
	Name : function(name){
		return document.getElementsByName(name);
	},
	Tag : function(tag){
		return document.getElementsByTagName(tag);
	}
}