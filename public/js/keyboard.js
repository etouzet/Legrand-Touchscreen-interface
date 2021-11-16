const write = $("#write"); 					//zone de texte
const keyboard = $("#section-keyboard");	//clavier
const navLeft = $("#section-navDoc-bar");	//menu de navigation gauche
const hide = $("#hide");					//bouton cacher clavier
const keyboardButton = $('#keyboard li');	//tous les boutons du clavier

//Fonctionnement du clavier
$(function() {
	
	//Cacher le clavier
	hide.click(function(){
		keyboard.hide();
		navLeft.show();
		webkitEnterFullscreen();
	})

	//Afficher le clavier
	write.click(function(){
		keyboard.show();
		navLeft.hide();
	});

	//Détection du click
	keyboardButton.click(function() {
		var $this = $(this),
		character = $this.html();

		//Bouton effacer un caractère
		if ($this.hasClass('delete')) {
			var html = write.html();

			write.html(html.substr(0, html.length - 1));
			return false;
		}

		//Ajouter un caractère
		write.html(write.html() + character);
	});
});