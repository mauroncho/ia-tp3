function startScreen() {
  let startGame = createButton("Jugar");
  startGame.position = (width / 2, height / 2);
  startGame.mousePressed(nextScreen);
  flag = false;
}
