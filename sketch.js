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
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text(`Score: ${score}`, width * 0.12, height * 0.06);
    pop();
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
