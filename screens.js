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
  spriteSheet(playerRun, 0, 0, 128, 128, 0, 0, 128, 128, 5, 7);
}
//funcionalidades de la pantalla inicio
function mousePressed() {
  if (gameScreen == 1) {
    if (!hover(width / 2, height / 2 - 40, 145, 70)) {
      gameScreen = 2;
    } else if (!hover(width / 2, height / 2 + 30, 140, 30)) {
      gameScreen = 4;
    }
  }
}

function keyPressed() {
  if (gameScreen == 3) {
    if (keyCode === ENTER) {
      gameScreen = 1;
    }
  }
  if (gameScreen == 4) {
    if (keyCode === ENTER) {
      gameScreen = 1;
    }
  }
}

function hover(x, y, width, height) {
  return (
    x + width / 2 < mouseX ||
    x - width / 2 > mouseX ||
    y + height / 2 < mouseY ||
    y - height / 2 > mouseY
  );
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

//cargar imagen
function bgImg() {
  image(bg, 430, 70, 64, 64, 32 * 3, 0, 32, 32);
  for (let x = 0; x < width; x++) {
    image(bg, 0 + x * 64, height - 64, 64, 64, 32, 0, 32, 32);
  }
}
//en la funcion image "d" significa destination y "s", source
//image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
let counter = 0;
function spriteSheet(
  sheet,
  dx,
  dy,
  dw,
  dh,
  sx,
  sy,
  sw,
  sh,
  animationSpeed,
  frameNumber
) {
  image(sheet, dx, dy, dw, dh, sx + sw * counter, sy, sw, sh);
  if (frameCount % animationSpeed == 0)
    counter < frameNumber ? counter++ : (counter = 0);
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
