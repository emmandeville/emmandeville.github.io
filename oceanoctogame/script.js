document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({makeResponsive: true, heroSpeed: 300, monsterSpeed: 400, attackRadius: 100, monsterHitRadius: 100, attackDuration:1000, jumpHeight: 300});
});