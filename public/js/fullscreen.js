const fullscreen = document.getElementById("fullscreen");
//const minscreen = $("#minscreen");
const repereFullscreen = document.getElementById("repereFullscreen");

/*$(function(){
    fullscreen.click(function(){
        if (repereFullscreen.hasClass("fa-expand")){
            repereFullscreen.removeClass("fa-expand");
            repereFullscreen.addClass("fa-compress");
        } else {
            repereFullscreen.removeClass("fa-compress");
            repereFullscreen.addClass("fa-expand");
        }
        fullscreen.hide();
        minscreen.show();
    });

    minscreen.click(function(){
        minscreen.hide();
        fullscreen.show();
    })
});*/

function toggleFullScreen(elem) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
    if (repereFullscreen.classList.contains("fa-expand")){
            repereFullscreen.classList.remove("fa-expand");
            repereFullscreen.classList.add("fa-compress");
        } else {
            repereFullscreen.classList.remove("fa-compress");
            repereFullscreen.classList.add("fa-expand");
        }
}