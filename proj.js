
	
	$("#img1").click(function(){
	$(".cont").hide();
	$("#img2").hide();
	$("#img3").hide();
	
	var value = $('#cc').val();
	var tempElement = $("<span></span>");
	tempElement.text(value);
	tempElement.css({"color":"DarkRed","font-family":"Butcherman", "font-size": "48px", "text-shadow": "4px 4px 4px #0000CD"});
	$(".centered").append(tempElement)

});
	$("#img2").click(function(){
	$(".cont").hide();
	$("#img1").hide();
	$("#img3").hide();	
	var value = $('#cc').val();
	var second = $("<span></span>");
	second.text(value);
	second.css({"color":"FireBrick","font-family":"Dancing", "font-size": "48px", "text-shadow": "4px 4px 4px #FFFAFA"});
	$(".centered").append(second)

});
	$("#img3").click(function(){
	$(".cont").hide();
	$("#img1").hide();
	$("#img2").hide();	
	var value = $('#cc').val();
	var therd = $("<span></span>");
	therd.text(value);
	therd.css({"color":"white","font-family":"Dancing", "font-size": "48px", "text-shadow": "4px 4px 4px #800000"});
	$(".centered").append(therd)

});