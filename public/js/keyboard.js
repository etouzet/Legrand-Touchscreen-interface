const written = document.getElementById('write');
const clavier = document.getElementById('clavier');
const navLeft = document.getElementById('navDoc-bar');
const hide = document.getElementById('hide');

//Afficher le clavier
written.addEventListener("click", () => {
    clavier.style.display = 'block';
    navLeft.style.display = 'none';
});

//Cacher le clavier
hide.addEventListener("click", () => {
    clavier.style.display = 'none';
    navLeft.style.display = 'block';
})


//Fonctionnement du clavier
$(function(){
	var $write = $('#write')

	//Détection du click
	$('#keyboard li').click(function(){
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


