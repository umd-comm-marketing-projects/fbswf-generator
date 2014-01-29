$(document).ready(function() {
						   
	$("#yt_form").submit(function() {
		
		var str = $("#yt_url").val();
		var ind = str.indexOf("v=");
		var sbstr;
		
		if(str == "") {
			alert("Please enter a URL");
			return false;
		}
		
		if (ind != -1) {
			ind 	= ind+2;
			sbstr 	= str.substring(ind, str.length);
			str 	= sbstr.split("&");
			sbstr 	= str[0];
			str 	= sbstr;
		} else {
			alert("Sorry, the URL you entered isn't in the proper format.");
			return false;
		}
		
		var color = $("input[name=yt_color]:radio:checked").val();
		var bgColor;
		var boColor;
		
		if(color == undefined) {
			alert("Please choose a color");
			return false;
		} else if(color == "blue") {
			bgColor = "c8d0e0";
			boColor = "000066";
		} else if(color == "maize") {
			bgColor = "ffe29e";
			boColor = "f2b20b";
		}
		
		var genCode = '															\
			<div 																\
				style="background-color:#' + bgColor + ';						\
				padding:10px;													\
				border-width:1px;												\
				border-style:solid;												\
				border-color:#' + boColor + ';									\
				width:430px;													\
				margin-left:auto;												\
				margin-right:auto;												\
				margin-bottom:10px;">											\
																				\
			<div style="width:420px;											\
				margin:0;														\
				padding:0;														\
				border:none;													\
				margin-left:auto;												\
				margin-right:auto;">											\
																				\
			<fb:swf 															\
				swfbgcolor="000000"												\
				imgstyle="border-width:3px; border-color:white;"				\
				swfsrc="http://www.youtube.com/v/' + str + '&rel=0&autoplay=1"	\
				imgsrc="http://img.youtube.com/vi/' + str + '/0.jpg"			\
					flashvars="showsearch=0&showinfo=0"							\
				width="420" height="316" />										\
																				\
			</div>																\
			</div>';
		
		$("textarea#fb_code").text(genCode);
		$("a#fancybox-trigger").fancybox({
			'centerOnScroll' 	:	'true',
		});
		$("a#fancybox-trigger").click();
		
		return false;
	});
	
	$("textarea#fb_code").click(function() {
			$(this).focus();
			$(this).select();
	})
	
	$("textarea#fb_code").bind("contextmenu",function(e){
			$(this).focus();
			$(this).select();
			return true;
	});
	
	// http://www.youtube.com/watch?v=gbRdXe5ST44
	// textarea#fb_code
	
});