window.addEventListener("load", function() {
    var boton = document.getElementById("calcular");
    boton.addEventListener("click", function() {
    	var segundos = parseInt(document.getElementById("segundos").value);
			setInterval(color, segundos*1000);
    	function color(){
    		document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    	}
  });
});





