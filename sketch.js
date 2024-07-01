const player = new Player();
let opponents = [];

function setup() {
  createCanvas(600, 600, game);
  rectMode(CENTER);
  opponents.push(new Opponent(300, 100, 50, 50, 5));
}

function draw() {
  background(0);
  player.update();
  //manejo de oponentes
  for (let i = 0; i < opponents.length; i++) {
    opponents[i].update();
    if (isColliding(player, opponents[i])) {
      console.log("hit");
      // console.log(this.y);
    }

    if (opponents[i].floorCollision()) {
      opponents.splice(i, 1);
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
