window.onload  = function(){
	console.log(Base.Id('i').innerHTML);
	var name = Base.Name('myname');
	console.log(name.length);
	for(i=0;i<name.length;i++){
		console.log(name[i].value);

	}
	var tag = Base.Tag('p');
	for (var i = tag.length - 1; i >= 0; i--) {
		console.log(tag[i].innerHTML);
	};
}