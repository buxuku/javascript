(function (){
	window.sys = {};
	var ua = navigator.userAgent.toLowerCase();
	//console.log(ua);
	var firefox = /firefox\/([\d.]+)/,
		chrome = /chrome\/([\d.]+)/,
		ie = /msie ([\d.]+)/;
	var s;
/*	if(firefox.test(ua)){
		s = ua.match(firefox);
		sys.firefox = s[1];
	}
	if(chrome.test(ua)){
		s = ua.match(chrome);
		sys.chrome = s[1];
	}
	if(ie.test(ua)){
		s = ua.match(ie);
		sys.ie = s[1];
	}*/

	(s = ua.match(firefox))? sys.firefox = s[1]:
	(s = ua.match(chrome))? sys.chrome = s[1]:
	(s = ua.match(ie))? sys.ie = s[1]:0
})();

//console.log(sys.chrome);