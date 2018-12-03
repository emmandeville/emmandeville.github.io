$(document).ready(function() {
  $(".buttoninfo").hover(function() {
    $("body").toggleClass("blue");
  });
  $(".buttonprice").hover(function() {
    $("body").toggleClass("purple");
  });
  $(".buttonphotos").hover(function() {
    $("body").toggleClass("peach");
  });
  $(".buttonlocation").hover(function() {
    $("body").toggleClass("green");
  });
});
