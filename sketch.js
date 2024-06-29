const player = new Player();

function setup() {
  createCanvas(600, 600, game);
  rectMode(CENTER);
}

function draw() {
  background(0);
  player.update();
}
