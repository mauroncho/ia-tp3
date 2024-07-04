//pantalla de inicio
function gameIndex() {
  const playButton = new CustomText(width / 2, height / 2, "Jugar", 60);
  playButton.update();
}

function mousePressed() {
  if (!hover(width / 2, height / 2, 160, 70)) {
    gameScreen = 2;
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
//pantalla de juego
function playScreen() {
  const scoreText = new CustomText(
    width * 0.17,
    height * 0.09,
    `Score: ${score}`,
    30,
    false
  );
  player.update();
  //manejo de oponentes
  if (frameCount % 60 == 0) {
    coins.push(new Opponent(random(30, 570), random(3, 6)));
  }
  for (let i = 0; i < coins.length; i++) {
    coins[i].update();
    if (isColliding(player, coins[i])) {
      coins.splice(i, 1);
      score += 5;
    }

    if (coins[i].floorCollision()) {
      coins.splice(i, 1);
    }
  }
  scoreText.update();
}
