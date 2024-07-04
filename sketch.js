const player = new Player();
let coins = [];
let gameScreen = 1;
let score = 0;

function setup() {
  createCanvas(600, 600, game);
  rectMode(CENTER);
}

function draw() {
  background(0);
  if (gameScreen == 1) {
    gameIndex();
  } else if (gameScreen == 2) {
    playScreen();
  } else {
    console.log("fin");
  }
}

function isColliding(player, opponent) {
  return !(
    player.x - player.width / 2 > opponent.x + opponent.width / 2 ||
    player.x + player.width / 2 < opponent.x - opponent.width / 2 ||
    player.y - player.height / 2 > opponent.y + opponent.height / 2 ||
    player.y + player.height / 2 < opponent.y - opponent.height / 2
  );
}
