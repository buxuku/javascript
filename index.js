window.onload  = function(){
	$().Tag('p').getEle(1).css("color","green").html("标题").click(function(){alert("ok");});
	$().getClass("cl","two").css("color","yellow");
	console.log($().Id('p').css('fontSize'));
	console.log($().Id('p').html());
	console.log($().Id('i').elements);
	console.log($().Id('i').elements);
	//$().Id('i').css('color','red').css('background','red');
	//alert($().Id('i').elements.length);
	var name = $().Name('myname');
	console.log(name.elements.length);
	for(i=0;i<name.elements.length;i++){
		console.log(name.elements[i].value);

	}
	var tag = $().Tag('p');
	for (var i = tag.elements.length - 1; i >= 0; i--) {
		console.log(tag.elements[i].innerHTML);
	};
	var reg = "d#My tme is LXD";
	var regt = /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/;
	if(regt.test(reg)){
		console.log("find");
	}
}