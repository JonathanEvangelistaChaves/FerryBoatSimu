

$(function() {

	var tempoTravessia = 10;//120
	var tempoSaidaCarros = 20;//30
	var tempoEntradaCarros = 10;//60
	
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
	var inicioC = 0;
	var iniSai = 0;
	var inicioT = 0;
	var tmp = tempoEntradaCarros;
	var status = 1;
	var m;
	var y = 0;
	var carrosBalsa = 0;
	
	var aux = 480;
	
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
			//console.log(t);
			t++;
			if(n == 0) {
				divPai.append("<div class='carro' id='carro" + n + "' style='left: " + pos + "px;'></div>");
				vetor[n] = Math.floor((Math.random() * 10) + 2);
				inicioC = t;
				n++;
			} else {
				//console.log(vetor[n-1]+inicioC + " " + t);
				if((vetor[n-1]+inicioC) < t) {
					divPai.append("<div class='carro' id='carro" + n + "' style='left: " + pos + "px;'></div>");
					vetor[n] = Math.floor((Math.random() * 10) + 2);
					inicioC = t;
					m = n;
					//console.log(" " + vetor[n]);
					n++;
				}
			}
			
			if(status == 1 && (inicioT + tempoEntradaCarros) > t) {
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
					}
				}
			}
			else if(status == 2 && (inicioT + tempoTravessia) > t) {
				$("#balsa1").animate({
					left: "440px",
					top: "400px"
				}, tempoTravessia*1000);
				$("#balsa2").animate({
					left: "440px",
					top: "80px"
				}, tempoTravessia*1000);
			}
			else if(status == 3 && (inicioT + tempoSaidaCarros) > t) {
				while(y < tempoSaidaCarros/5){
					divPai.append("<div class='carro' id='carrosai' style='left: 480px; top: 440px;'></div>");
					divPai.append("<div class='carro' id='carrosai2' style='left: 480px; top: 100px;'></div>");
					y++;
				}
				$("#carrosai").animate({
					left: "350px",
					top: "600px"
				}, 5000).delay(0).fadeOut(10, function(){
					$(this).remove();
				});
				$("#carrosai2").animate({
					left: "600px",
					top: "0px"
				}, 5000).delay(0).fadeOut(10, function(){
					$(this).remove();
				});
				
				
				if(n == 1)
				{		
					$("#carro" + (n-1)).animate({
						left: (480 + (50 * fila)) + "px"
					}, vetor[n-1]*1000);
					
					fila++;
				} else {
					if(fila == 0) {
						if($("#carro" + (n-2)).css("left") == 480 + "px")
						{
							$("#carro" + (m)).animate({
								left: (480 + (50 * fila)) + "px"
							}, vetor[m]*1000);
							
							fila++;
						}
					} else {
						console.log("   " + $("#carro" + (n-2)).css("left"));
						if($("#carro" + (n-2)).css("left") == aux + "px")
						{
							$("#carro" + (m)).animate({
								left: aux + "px"
							}, vetor[m]*1000);
							
							fila++;
							aux = aux + 50;
							console.log("maisa um");
						}
					}
				}
				
				
			}
			
			if(t >= tmp+inicioT)
			{
				if(status == 1) {
					status++;
					tmp = tempoTravessia;
				}
				else if(status == 2) {
					status++;
					tmp = tempoSaidaCarros;
				}
				else {
					status = 1;
					y = 0;
					tmp = tempoEntradaCarros;
				}
				inicioT = t;
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