//PANTALLA INICIO
function gameIndex() {
  score = 0;
  diamonds = [];
  fires = [];
  const creditsButton = new CustomText(
    width / 2,
    height / 2 + 30,
    "creditos",
    30
  );
  const playButton = new CustomText(width / 2, height / 2 - 40, "Jugar", 55);
  playButton.update();
  creditsButton.update();
  bgImg();
}

//PANTALLA JUEGO
function playScreen() {
  const scoreText = new CustomText(
    width * 0.17,
    height * 0.06,
    `Score: ${score}`,
    30,
    false
  );
  const lifeText = new CustomText(
    width * 0.8,
    height * 0.06,
    `Vidas: ${player.lifeTracker()}`,
    30,
    false
  );
  bgImg();
  player.update();
  //manejo de oponentes
  if (frameCount % 60 == 0) {
    diamonds.push(
      new Diamond(random(30, 570), random(3, 6), 40, 40, "green", diamondSheet)
    );
  }
  if (frameCount % 75 == 0) {
    fires.push(new Fire(random(30, 570), random(3, 6), 50, 50, "red"));
  }
  //monedas
  //for loop "inverso" (con i--) para evitar el flickering que generan los elementos no procesados
  for (let i = diamonds.length - 1; i >= 0; i--) {
    diamonds[i].update();
    if (isColliding(player, diamonds[i])) {
      diamonds.splice(i, 1);
      score += 5;
    } else if (diamonds[i].floorCollision()) {
      diamonds.splice(i, 1);
    }
  }
  //opponentes
  for (let i = fires.length - 1; i >= 0; i--) {
    fires[i].update();
    if (isColliding(player, fires[i])) {
      fires.splice(i, 1);
      if (player.receiveDamage()) gameScreen = 3;
    } else if (fires[i].floorCollision()) {
      fires.splice(i, 1);
    }
  }
  scoreText.update();
  lifeText.update();
}

//GAME OVER SCREEN
function gameOverScreen() {
  const pressEnter = new CustomText(
    width / 2,
    height / 2 + 50,
    "Pulsa ENTER para continuar",
    20,
    false
  );
  const gameOverText = new CustomText(
    width / 2,
    height / 2,
    "Game Over",
    60,
    false
  );
  const playerScore = new CustomText(
    width / 2,
    height / 2 - 110,
    `tu score: ${score}`,
    40,
    false
  );
  gameOverText.update();
  pressEnter.update();
  playerScore.update();
  bgImg();
}

//CREDITS SCREEN
function creditsScreen() {
  bgImg();
  const credits = new CustomText(
    width / 2,
    height / 2 - 45,
    "desarrollado por: \n yanina longo\n mauro giachero ",
    40,
    false
  );
  const pressEnter = new CustomText(
    width / 2,
    height / 2 + 120,
    "Pulsa ENTER \npara volver al menu principal",
    20,
    false
  );
  pressEnter.update();
  credits.update();
}
