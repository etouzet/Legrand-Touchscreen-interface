const written = document.getElementById('write');
const clavier = document.getElementById('clavier');
const navLeft = document.getElementById('navDoc-bar');
const hide = document.getElementById('hide');

//Fonctionnement du clavier
$(function() {
	
	//Cacher le clavier
	//hide.addEventListener("click", () => {
	$("#hide").click(function(){
		//clavier.style.display = 'none';
		//navLeft.style.display = 'block';
		$("#clavier").hide();
		$("#navDoc-bar").show();
		webkitEnterFullscreen();
	})

	//Afficher le clavier
	//written.addEventListener("click", () => {
	$("#write").click(function(){
		//clavier.style.display = 'block';
		//navLeft.style.display = 'none';
		$("#clavier").show();
		$("#navDoc-bar").hide();
	});

	//Détection du click
	$('#keyboard li').click(function() {
		var $write = $('#write');
		var $this = $(this),
		character = $this.html();

		//Bouton effacer un caractère
		if ($this.hasClass('delete')) {
			var html = $write.html();

			$write.html(html.substr(0, html.length - 1));
			return false;
		}

		//Ajouter un caractère
		$write.html($write.html() + character);
	});
});