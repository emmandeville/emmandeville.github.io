document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL:"./img/title-screen.png", makeResponsive: true, heroSpeed: 300, monsterSpeed: 300, timeBetweenMonsters: 4500,
  	attackRadius: 100, monsterHitRadius: 100, attackDuration: 500, jumpHeight: 240});
});