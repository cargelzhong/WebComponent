var name = "#floatMenu";
var menuYloc = null;
//sliding menu
$(document).ready(function () {
    menuYloc = parseInt($(name).css("top").substring(0, $(name).css("top").indexOf("px")))
    $(window).scroll(function () {
        offset = menuYloc + $(document).scrollTop() + "px";
        $(name).animate({ top: offset }, { duration: 500, queue: false });
    });
});
//function 2 C topbar
$(function () {
	$(".menu>li").click(function () {
		var current = $(this).index();
		switch (current) {
			// case 0:
			// 	$('#lavalamp').css("left", "0");
			// 	console.log('0');
			// 	break;
			case 1:
				$('#nav').css("display", "none");
				break;
			case 2:
			  $('#nav').css("display", "block");
				break;
			// case 3:
			// 	$('#lavalamp').css("left", "45%"); 
			// 	console.log('3');
			// 	break;
		}
	})
});


