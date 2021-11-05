
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


