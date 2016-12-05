

$(function() {

	var tempoTravessia = 120;
	var tempoSaidaCarros = 30;
	var tempoEntradaCarros = 60;
	
	var fila = 0;
	var pos = 1000;
	var vetor = new Array();

	var divPai = $('#principal');

	var rand = Math.floor((Math.random() * 10) + 1);
	
	/*for(var i = 0; i < rand; i++)
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
	}*/
	var n = 0;
	var intervalo;
	var t = 0;
	var inicio = 0;
	var status;
	var m;
	var carrosBalsa = 0;
	
	if($("#balsa1").css("top") == "400px") {
		$("#balsa1").html(carrosBalsa);
	} else {
		$("#balsa2").html(carrosBalsa);			
	}
	
	$("#btnMover").click(function(){

		// 1 liberada entrada
		// 2 ferry saiu
		// 3 saida carros
	
		intervalo = window.setInterval(function() {
			console.log(t);
			t++;
			status = 1;
			if(n == 0) {
				divPai.append("<div class='carro' id='carro" + n + "' style='left: " + pos + "px;'></div>");
				vetor[n] = Math.floor((Math.random() * 10) + 2);
				inicio = t;
				n++;
			} else {
				//console.log(vetor[n-1]+inicio + " " + t);
				if((vetor[n-1]+inicio) < t) {
					divPai.append("<div class='carro' id='carro" + n + "' style='left: " + pos + "px;'></div>");
					vetor[n] = Math.floor((Math.random() * 10) + 2);
					inicio = t;
					m = n;
					console.log(" " + vetor[n]);
					n++;
				}
			}
			
			if(n == 1)
			{		
				$("#carro" + (n-1)).animate({
					left: (480 + (50 * fila)) + "px"
				}, vetor[n-1]*1000).delay(0).fadeOut(10, function(){
					$(this).hide();
				});
				
				if($("#balsa1").css("top") == "400px") {
					$("#balsa1").html(carrosBalsa);
				} else {
					$("#balsa2").html(carrosBalsa);
				}
				
				if(fila > 0) {
					fila--;
				}
			} else {
				if($("#carro" + (n-2)).css("left") == "480px")
				{
					$("#carro" + (m)).animate({
						left: (480 + (50 * fila)) + "px"
					}, vetor[m]*1000).delay(0).fadeOut(10, function(){
						$(this).hide();
					});
					
					
					if($("#balsa1").css("top") == "400px") {
						$("#balsa1").html(carrosBalsa);
					} else {
						$("#balsa2").html(carrosBalsa);
					}
					
					if(fila > 0) {
						fila--;
					}
				}
			}
			
			
		},1000);
		/*
		for(var j = 0; j < 1; j++){
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
			
			if($("#balsa2").css("top") == "400px" || $("#balsa1").css("top") == "400px")//parseInt($("#carro").css("left")) > 480)
			{
				if(n == 0)
				{		
					$("#carro" + n).animate({
						left: (480 + (50 * fila)) + "px"
					}, vetor[n]*1000).delay(0).fadeOut(10, function(){
						$("#carro" + i).toggle();
					});
					if(fila > 0) {
						fila--;
					}
				} else {
					if($("#carro" + (n-1)).css("top") == "480px")
					{		
						$("#carro" + n).animate({
							left: (480 + (50 * fila)) + "px"
						}, vetor[n]*1000).delay(0).fadeOut(10, function(){
							$("#carro" + n).toggle();
						});
						if(fila > 0) {
							fila--;
						}
					}
				}
			}
			else {
				for(var i = 0; i < rand; i++)
				{	
					$("#carro" + i).animate({
						left: (480 + (50 * fila)) + "px"
					}, vetor[i]*1000);
					fila++;
				}
			}
		}*/
	});
});