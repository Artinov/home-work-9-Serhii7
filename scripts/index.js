var ball = document.querySelector(".discoball");
	var array = new Array("here", "goes", "our", "awesome", "disco", "ball");
	var i =0;

function goDisco() {
	if(i == 5){
		i=0;
	}
	

	ball.setAttribute('class','discoball'+ ' '+array[i]);
	i++;
	
}

setInterval(goDisco,300);