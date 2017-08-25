$(function () {
	$("#topbar>li").click(function () {
		$('#topbar>li>a').css('color', '#FFFFFF');
		var current = $(this).index();
		switch (current) {
			case 0:
				$('#lavalamp').css("left", "0");
				console.log('0');
				break;
			case 1:
				$('#lavalamp').css("left", "15%");
				console.log('1');
				break;
			case 2:
				$('#lavalamp').css("left", "30%");
				console.log('2');
				break;
			case 3:
				$('#lavalamp').css("left", "45%"); 
				console.log('3');
				break;
		}
		$('#topbar>li>a:eq(' + current + ')').css('color', '#FF4500');
	})
});
