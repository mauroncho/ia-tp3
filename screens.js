//PANTALLA INICIO - gameScreen == 1
function gameIndex() {
  //reset de variables
  score = 0;
  diamonds = [];
  fires = [];
  // diamondSpawn = 60;
  // fireSpawn = 75;
  //textos de esta pantalla
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

//PANTALLA JUEGO - gameScreen == 2
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
  if (frameCount % diamondSpawn == 0) {
    diamonds.push(
      new Diamond(
        random(30, 570),
        random(diamondMinVel, diamondMaxVel),
        40,
        40,
        diamondSheet
      )
    );
  }
  if (frameCount % fireSpawn == 0) {
    fires.push(
      new Fire(
        random(30, 570),
        random(fireMinVel, fireMaxVel),
        100,
        100,
        fireSheet
      )
    );
  }
  //diamantes
  //for loop "inverso" (con i--) para evitar el flickering que generan los elementos no procesados
  for (let i = diamonds.length - 1; i >= 0; i--) {
    diamonds[i].update();
    if (
      isColliding(
        player,
        diamonds[i].x,
        diamonds[i].y,
        diamonds[i].width,
        diamonds[i].height
      )
    ) {
      diamonds.splice(i, 1);
      score += 5;
    } else if (diamonds[i].floorCollision()) {
      diamonds.splice(i, 1);
    }
  }
  //fueguitos
  for (let i = fires.length - 1; i >= 0; i--) {
    fires[i].update();
    if (
      isColliding(
        player,
        fires[i].x,
        fires[i].y,
        fires[i].width - 63,
        fires[i].height - 45
      )
    ) {
      fires.splice(i, 1);
      if (player.receiveDamage()) gameScreen = 3;
    } else if (fires[i].floorCollision()) {
      fires.splice(i, 1);
    }
  }
  scoreText.update();
  lifeText.update();

  //incremento de dificultad
  if (score > 50 && score < 100) {
    diamondSpawn = 50;
    fireSpawn = 60;
    diamondMinVel = 4;
    fireMinVel = 4;
  } else if (score > 100 && score < 150) {
    diamondSpawn = 40;
    fireSpawn = 45;
    diamondMinVel = 5;
    fireMinVel = 4;
  } else if (score > 150 && score < 200) {
    fireSpawn = 30;
    fireMinVel = 6;
    fireMaxVel = 8;
  } else if (score > 200 && score < 300) {
    diamondSpawn = 25;
    diamondMaxVel = 7;
    fireSpawn = 20;
    fireMaxVel = 10;
  } else if (score > 300) {
    fireSpawn = 10;
  }
}

//PANTALLA GAME OVER - gameScreen == 3
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

//PANTALLA CREDITOS - gameScreen == 4
function creditsScreen() {
  bgImg();
  const credits = new CustomText(
    width / 2,
    height / 2 - 45,
    "desarrollado por: \n yanina longo \n mauro giachero ",
    40,
    false
  );
  const pressEnter = new CustomText(
    width / 2,
    height / 2 + 120,
    "Pulsa ENTER \n para volver al menu principal",
    20,
    false
  );
  pressEnter.update();
  credits.update();
}
