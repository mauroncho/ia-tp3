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
      // score += 5;
      player.receiveDamage();
    } else if (opponents[i].floorCollision()) {
      opponents.splice(i, 1);
    }
  }
  scoreText.update();
}
