window.onload = function() {
	$("input").focus(function(){
	  $(this).parents('.form-group').addClass('focused');
	});
	$("label:not(.no-effect-label)").click(function(){
	  $(this).parents('.form-group').addClass('focused');
		$(this).siblings("input").focus();
	});
	$("input").blur(function(){
	  var inputValue = $(this).val();
		//If Invalid input
	  if ($(this).is(":invalid") &&  inputValue !== "" ) {
		  $(this).addClass('invalid');
	  } else if ( inputValue === "" ) { //If Empty
		$(this).removeClass('filled invalid');
		$(this).parents('.form-group').removeClass('focused');
	  } else {
		$(this).addClass('filled');
		  $(this).removeClass('invalid');
	  }
	});

	
};