const player = new Player();
let opponent;

function setup() {
  createCanvas(600, 600, game);
  rectMode(CENTER);
  opponent = new Opponent(300, 100, 50, 50, 5);
}

function draw() {
  background(0);
  player.update();
  opponent.update();
}
