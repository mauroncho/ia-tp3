const player = new Player();
let coins = [];

function setup() {
  createCanvas(600, 600, game);
  rectMode(CENTER);
}

function draw() {
  background(0);
  player.update();
  //manejo de oponentes
  if (frameCount % 75 == 0) {
    coins.push(new Opponent(random(30, 570), random(2, 5)));
  }
  for (let i = 0; i < coins.length; i++) {
    coins[i].update();
    if (isColliding(player, coins[i])) {
      console.log("hit");
      // console.log(this.y);
    }

    if (coins[i].floorCollision()) {
      coins.splice(i, 1);
    }
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
