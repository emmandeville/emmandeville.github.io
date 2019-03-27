document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({makeResponsive: true, heroSpeed: 300, monsterSpeed: 300, timeBetweenMonsters: 4000,
  	attackRadius: 100, monsterHitRadius: 100, attackDuration: 650, jumpHeight: 240});
});