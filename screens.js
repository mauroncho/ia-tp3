function startScreen() {
  // let startGame = createButton("Jugar");
  // startGame.position = (width / 2, height / 2);
  // startGame.mousePressed(nextScreen);
  push();
  if (hover(width / 2, height / 2, 130, 70)) {
    mouseOver();
  }
  fill(50);
  rect(width / 2, height / 2, 130, 70);
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Jugar", width / 2, height / 2);
  pop();
  // flag = false;
}

function hoverEffect() {
  stroke(255);
  strokeWeight(2);
}
