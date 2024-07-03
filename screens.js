function gameIndex() {
  const prueba = new CustomText(100, 100, "hola", 100);
  prueba.update();

  push();
  fill(50);
  if (!hover(width / 2, height / 2, 160, 70)) {
    stroke("red");
    strokeWeight(5);
  } else {
    noStroke();
  }
  rect(width / 2, height / 2, 160, 70);
  pop();
  push();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(50);
  text("Jugar", width / 2, height / 2);
  pop();
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

function playScreen() {}
