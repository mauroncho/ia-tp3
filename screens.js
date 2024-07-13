//PANTALLA INICIO
function gameIndex() {
  score = 0;
  coins = [];
  opponents = [];
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
    height * 0.09,
    `Score: ${score}`,
    30,
    false
  );
  bgImg();
  player.update();
  //manejo de oponentes
  if (frameCount % 60 == 0) {
    coins.push(new Opponent(random(30, 570), random(3, 6), "green"));
  }
  if (frameCount % 75 == 0) {
    opponents.push(new Opponent(random(30, 570), random(3, 6), "red"));
  }
  //monedas
  //for loop "inverso" (con i--) para evitar el flickering que generan los elementos no procesados
  for (let i = coins.length - 1; i >= 0; i--) {
    coins[i].update();
    if (isColliding(player, coins[i])) {
      coins.splice(i, 1);
      score += 5;
    } else if (coins[i].floorCollision()) {
      coins.splice(i, 1);
    }
  }
  //opponentes
  for (let i = opponents.length - 1; i >= 0; i--) {
    opponents[i].update();
    if (isColliding(player, opponents[i])) {
      opponents.splice(i, 1);
      if (player.receiveDamage()) gameScreen = 3;
    } else if (opponents[i].floorCollision()) {
      opponents.splice(i, 1);
    }
  }
  scoreText.update();
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
