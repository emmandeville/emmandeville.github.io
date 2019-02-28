$(document).ready(function() {
  setTimeout(function(){
    $(".launch").addClass("alarming"); 
    $(".button").addClass("alarming");
  }, 5000);

  $(".button").click(function() { 
    $(".launch").removeClass("alarming");
    $(".button").removeClass("alarming");
  });

});