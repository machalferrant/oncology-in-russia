
/* Функциональность меню */

$(function() {
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        blockId = $(this).data('scroll');
        blockOffset = $(blockId).offset().top;
        console.log(blockOffset);

        $("html, body").animate({
            scrollTop: blockOffset - 50
        })

    });

/* Модальное окно по кнопке */

$("[data-modal]").on("click", function(event){
    event.preventDefault();

    $(modal_tool).addClass('show');

});

$(modal_tool).on("click", function() {
    $(modal_tool).removeClass('show');
});

});

$(document).ready(function($) {
	$('.button').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});



/* Тултип */

function show (elem) {  
    elem.style.display="block";
}
function hide (elem) { 
    elem.style.display=""; 
}