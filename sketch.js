const player = new Player();
let coins = [];
let screen = 1;
let score = 0;
let flag = true;

function setup() {
  createCanvas(600, 600, game);
  rectMode(CENTER);
}

function draw() {
  background(0);
  if (screen == 1 && flag) {
    startScreen();
  } else if (screen == 2) {
    player.update();
    //manejo de oponentes
    if (frameCount % 50 == 0) {
      coins.push(new Opponent(random(30, 570), random(2, 5)));
    }
    for (let i = 0; i < coins.length; i++) {
      coins[i].update();
      if (isColliding(player, coins[i])) {
        score += 5;
        coins.splice(i, 1);
        console.log(score);
      }

      if (coins[i].floorCollision()) {
        coins.splice(i, 1);
      }
    }
  }
}

function mousePressed() {}

function isColliding(player, opponent) {
  return !(
    player.x - player.width / 2 > opponent.x + opponent.width / 2 ||
    player.x + player.width / 2 < opponent.x - opponent.width / 2 ||
    player.y - player.height / 2 > opponent.y + opponent.height / 2 ||
    player.y + player.height / 2 < opponent.y - opponent.height / 2
  );
}

function hover(x, y, width, height) {
  return (
    x + width / 2 < mouseX ||
    x - width / 2 > mouseX ||
    y + height / 2 > mouseY ||
    y + height / 2 < mouseY
  );
}

function nextScreen() {
  console.log("next");
  screen++;
}
