//DIVERSAS FUNCIONALIDADES DE LA APP
//acciones de los botones en la pantalla de inicio
function mousePressed() {
  if (gameScreen == 1) {
    if (!playButton.hover()) {
      gameScreen = 2;
    } else if (!creditsButton.hover()) {
      gameScreen = 4;
    }
  }
}

//interaccion para volver a la pantalla de inicio presionando enter
function keyPressed() {
  if (gameScreen == 3 || gameScreen == 4 || gameScreen == 5) {
    if (keyCode === ENTER) {
      gameScreen = 1;
    }
  }
}

//COLISION ENTRE PERSONAJE Y ELEMENTOS
function isColliding(
  player,
  opponentX,
  opponentY,
  opponentWidth,
  opponentHeight
) {
  return !(
    player.x - player.width / 2 + 50 > opponentX + opponentWidth / 2 ||
    player.x + player.width / 2 - 50 < opponentX - opponentWidth / 2 ||
    player.y - player.height / 2 + 60 > opponentY + opponentHeight / 2
  );
}

//dibujo del background
function bgImg() {
  image(bg, 430, 70, 64, 64, 32 * 3, 0, 32, 32);
  for (let x = 0; x < width; x++) {
    image(bg, 0 + x * 64, height - 64, 64, 64, 32, 0, 32, 32);
  }
}

//DIBUJAR SPRITESHEETS PARA ANIMACIONES
//usamos 9 parametros en la funcion image
//aqui una pequeña ayuda --> "d" significa destination y "s", source
//image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])

//INCREMENTO DE DIFICULTAD EN playScreen
function increaseDifficulty() {
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
    fireSpawn = 12;
    fireMinVel = 8;
    fireMaxVel = 10;
  } else if (score > 250 && score < 350) {
    diamondSpawn = 20;
    fireMaxVel = 11;
    fireSpawn = 8;
  }
}
