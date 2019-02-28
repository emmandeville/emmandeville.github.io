$(document).ready(function() {
  setTimeout(function(){
  	$(".button").removeClass("off");
    $(".launch").removeClass("off");
    $(".launch").addClass("alarming"); 
    $(".button").addClass("alarming");
    $(".rocket").addClass("off");
    $(".back").addClass("alarming");
  }, 30000);

  $(".button").click(function() { 
    $(".launch").removeClass("alarming");
    $(".button").removeClass("alarming");
    $(".back").removeClass("alarming");
    $(".launch").addClass("off");
    $(".button").addClass("off");
    $(".rocket").removeClass("off");
  });

});