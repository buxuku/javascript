window.onload  = function(){
	$().Tag('p').getEle(1).css("color","green").html("标题").click(function(){alert("ok");});
	$().getClass("cl","two").css("color","yellow");
	$().getClass("cl","one").css("color","red");
	$().Id('p').css("color","red");
	$().Id('two').hover(function(){
		$(this).css('background', 'red');
		$().Id('list').show();
	},function(){
		$(this).css('background', 'green');
		$().Id('list').hide();
	});
	$().getClass('login').click(function(){
		$().getClass('login_box').css('display',"block");
		$().getClass('screen').lock();
	})
		$().getClass('close').click(function(){
		$().getClass('login_box').css('display',"none");
		$().getClass('screen').unlock();
	})
	$().getClass('login_box').center(300,200);
	$().resize(function(){
		$().getClass('login_box').center(300,200);
		if($().getClass('login_box').css('display') == 'block'){
		$().getClass('screen').lock();
		}
	});
	//$().addRule(0,'body','background-color:#ccc',0);
	$().removeRule(0);
	$().Id('id').css("color","yellow").addClass("a").addClass('b').addClass('c').addClass('a').removeClass('a');
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