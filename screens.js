//PANTALLA INICIO - gameScreen == 1
function gameIndex() {
  //reset de variables
  score = 0;
  diamondSpawn = 60;
  diamondMinVel = 3;
  diamondMaxVel = 6;
  fireSpawn = 75;
  fireMinVel = 3;
  fireMaxVel = 3;
  diamonds = [];
  fires = [];
  //textos de esta pantalla
  // titulo
  push();
  let startColor = color("#d21a26");
  let endColor = color("#f0d804");
  for (let i = 0; i < 8; i++) {
    let inter = map(i, 0, 8, 0, 1);
    let c = lerpColor(startColor, endColor, inter);
    fill(c);
    noStroke();
    textSize(100);
    textAlign(CENTER, CENTER);
    textFont(fontDisplay);
    text("Agniel", width / 2 - 10, 80 + i);
  }
  pop();

  const playButton = new CustomText(
    width / 2,
    height / 2 - 115,
    "jugar",
    65,
    true
  );
  const creditsButton = new CustomText(
    width / 2 - 5,
    height / 2 - 45,
    "créditos",
    30,
    true,
    200
  );
  const howToPlay = new CustomText(
    width / 2,
    height / 2 + 65,
    "movete con las flechas del teclado \n los fuegos quitan vida \n los diamantes suman puntos \n sin vidas perdés \n ganás al llegar a 350 puntos ",
    19,
    false,
    180
  );
  howToPlay.update();
  playButton.update();
  creditsButton.update();
  bgImg();
  player.update();
  //manejo sonoro
  if (
    adventureMusic.isPlaying() ||
    bossMusic.isPlaying() ||
    winMusic.isPlaying()
  ) {
    adventureMusic.stop();
    bossMusic.stop();
    winMusic.stop();
  }
}

//PANTALLA JUEGO - gameScreen == 2
function playScreen() {
  //textos de esta pantalla
  const scoreText = new CustomText(
    width * 0.17,
    height * 0.06,
    `score: ${score}`,
    30,
    false
  );
  const lifeText = new CustomText(
    width * 0.8,
    height * 0.06,
    `vidas: ${player.lifeTracker()}`,
    30,
    false
  );
  scoreText.update();
  lifeText.update();
  //dibujo de background y player
  bgImg();
  player.update();

  //logica para aparicion de diamentes/fuegos (cada x tiempo se agrega una instancia de clase al array correspondiente)
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
  //manejo de array diamantes
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
      diamondScore.play();
    } else if (diamonds[i].floorCollision()) {
      diamonds.splice(i, 1);
    }
  }
  //manejo de array fueguitos
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
      fireDmg.play();
      if (player.receiveDamage()) {
        gameScreen = 3;
        player.restartPosition();
        player.restartLife();
      }
    } else if (fires[i].floorCollision()) {
      fires.splice(i, 1);
    }
  }
  //manejo sonoro
  if (score < 200) {
    adventureMusic.play();
    adventureMusic.playMode("untilDone");
  } else if (score > 200 && score < 350) {
    adventureMusic.stop();
    bossMusic.play();
    bossMusic.playMode("untilDone");
  }
  //incremento de dificultad
  if (score > 50 && score < 100) {
    diamondSpawn = 50;
    fireSpawn = 60;
    diamondMinVel = 4;
    fireMinVel = 4;
  } else if (score > 100 && score < 150) {
    diamondSpawn = 40;
    fireSpawn = 40;
    diamondMinVel = 5;
    fireMinVel = 4;
  } else if (score > 150 && score < 200) {
    fireSpawn = 20;
    fireMinVel = 7;
    fireMaxVel = 9;
  } else if (score > 200 && score < 250) {
    diamondSpawn = 25;
    diamondMaxVel = 7;
    fireSpawn = 10;
    fireMinVel = 8;
    fireMaxVel = 10;
  } else if (score > 250 && score < 350) {
    diamondSpawn = 20;
    fireMaxVel = 11;
    fireSpawn = 7;
  }

  //win condition
  if (score >= 350) {
    gameScreen = 5;
    player.restartLife();
  }
}

//PANTALLA GAME OVER - gameScreen == 3
function gameOverScreen() {
  //manejo de sonido
  if (bossMusic.isPlaying() || adventureMusic.isPlaying()) {
    bossMusic.stop();
    adventureMusic.stop();
  }
  const playerScore = new CustomText(
    width / 2,
    height / 2 - 50,
    `score: ${score}`,
    40,
    false
  );
  const gameOverText = new CustomText(
    width / 2,
    height / 2,
    "game over",
    60,
    false
  );
  const pressEnter = new CustomText(
    width / 2,
    height / 2 + 100,
    "pulsá ENTER para continuar",
    20,
    false,
    200
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
    45,
    false
  );
  const pressEnter = new CustomText(
    width / 2,
    height / 2 + 110,
    "pulsá ENTER \n para volver al menu principal",
    20,
    false,
    200
  );
  pressEnter.update();
  credits.update();
  player.update();
}

//PANTALLA GANASTE - gameScreen == 5
function winScreen() {
  //manejo de sonido
  if (winMusic.currentTime() >= winMusic.duration() - 0.2) {
    winMusic.stop();
  } else {
    bossMusic.stop();
    adventureMusic.stop();
    winMusic.play();
    winMusic.playMode("untilDone");
  }
  bgImg();
  const winText = new CustomText(
    width / 2,
    height / 2 - 50,
    "GANASTE!",
    60,
    false
  );
  const pressEnter = new CustomText(
    width / 2,
    height / 2 + 100,
    "pulsá ENTER para continuar",
    20,
    false,
    200
  );
  pressEnter.update();
  winText.update();
  player.update();
}
