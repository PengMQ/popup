$(document).ready(function(){
	popupOverlay();
})

function popupOverlay(){
	// popup shows up 
	$('a[href = "#popup-container"]').click(function(){
		$('.popup-container').addClass('show'); // add class 'show' to '.popup-container' make it show up
		$('body').addClass('scroll-lock'); // this will make screen cannot scroll when popup shows up, if you stil want screen to scroll, then do not add this line of code
	});

     // hidden popup 
	$('input[value = "Cancel"]').click(function(){
		$('.popup-container').removeClass('show'); // add class 'show' to '.popup-container' make it show up
	});

	$('body').click(function(event ){
            var $target = $(event.target);
            // if we do not exclude the "Contact us" button, when you click it, the popup will show and then hide.
            // We need to defect that the customer is click the place where is out of the '.popup-content'
            if(!$target.is('a[href = "#popup-container"]') && !$target.parents().is('.popup-content') && !$target.is('.popup-content')){
                $('.popup-container').removeClass('show'); // hide popup
            }
        });

} 