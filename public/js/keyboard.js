const written = document.getElementById('write');
const clavier = document.getElementById('clavier');
const navLeft = document.getElementById('navDoc-bar')
const hide = document.getElementById('hide');
written.addEventListener("click", () => {
	clavier.style.display = 'block';
	navLeft.style.display = 'none';
});
hide.addEventListener("click", () => {
	clavier.style.display = 'none';
	navLeft.style.display = 'block';
})


$(function(){
	var $write = $('#write'),
		shift = false,
		capslock = false;

	$('#keyboard li').click(function(){
		var $this = $(this),
			character = $this.html();

		// Delete
		if ($this.hasClass('delete')) {
			var html = $write.html();

			$write.html(html.substr(0, html.length - 1));
			return false;
		}

		// Add the character
		$write.html($write.html() + character);
	});
});


