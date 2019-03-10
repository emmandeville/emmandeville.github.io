$(document).ready(function() {
  setTimeout(function(){
  	$(".button").removeClass("off");
    $(".launch").removeClass("off");
    $(".alert").removeClass("off");
    $(".launch").addClass("alarming"); 
    $(".button").addClass("alarming");
    $(".rocket").addClass("off");
    $(".back").addClass("alarming");
    $(".alert").addClass("alarming");
    $("audio").get(0).play();
  }, 30000);

  $(".button").click(function() { 
    $(".launch").removeClass("alarming");
    $(".button").removeClass("alarming");
    $(".alert").removeClass("alarming");
    $(".back").removeClass("alarming");
    $(".launch").addClass("off");
    $(".button").addClass("off");
    $(".alert").addClass("off");
    $(".rocket").removeClass("off");
    $("audio").get(0).pause();
    $("audio").get(0).currentTime = 0;
    setTimeout(function(){
    $(".button").removeClass("off");
    $(".launch").removeClass("off");
    $(".alert").removeClass("off");
    $(".launch").addClass("alarming"); 
    $(".button").addClass("alarming");
    $(".rocket").addClass("off");
    $(".back").addClass("alarming");
    $(".alert").addClass("alarming");
  }, 30000);
  });

});