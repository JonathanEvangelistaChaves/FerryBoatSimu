

$(function() {

	var pos = 1000;
	var vetor = new Array();

	var divPai = $('#principal');

	var rand = Math.floor((Math.random() * 10) + 1);
	
	for(var i = 0; i < rand; i++)
	{
		divPai.append("<div class='carro' id='carro" + i + "' style='left: " + pos + "px;'></div>");
		if(i == 0) {
			vetor[i] = Math.floor((Math.random() * 10) + 1);
		}
		else {
			vetor[i] = vetor[i-1] + Math.floor((Math.random() * 10) + 1);
		}
		
		pos = pos + 500;
		console.log("add");
	}

	$("#btnMover").click(function(){
		if($("#balsa1").css("top") == "80px" && $("#carro").css("left") == "480px")
		{
			$("#balsa1").animate({
			left: "440px",
			top: "400px"
			}, 5000);
			$("#balsa2").animate({
			left: "440px",
			top: "80px"
			}, 5000);
		}
		else if($("#carro").css("left") == "480px"){
			$("#balsa1").animate({
			left: "440px",
			top: "80px"
			}, 5000);
			$("#balsa2").animate({
			left: "440px",
			top: "400px"
			}, 5000);
		}
		
		if(true)//parseInt($("#carro").css("left")) > 480)
		{
			for(var i = 0; i < rand; i++)
			{		
				$("#carro" + i).animate({
					left: "480px"
				}, vetor[i]*1000);
			}
		}
		
	});
});