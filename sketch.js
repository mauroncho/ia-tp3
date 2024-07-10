let font1;
let font2;
let font3;
let font4;
let bg;
let playerSheet;
let player;
let playerRun;
function preload() {
  font1 = loadFont("./assets/fonts/slkscr.ttf");
  // font2 = loadFont("./assets/slkscrb.ttf");
  // font3 = loadFont("./assets/slkscre.ttf");
  // font4 = loadFont("./assets/slkscreb.ttf");
  playerRun = loadImage("./assets/img/run.png");
  bg = loadImage("./assets/img/bg.png");
  playerSheet = loadImage("./assets/img/player-cut.png");
}
let coins = [];
let opponents = [];
let gameScreen = 1;
let score = 0;

function setup() {
  createCanvas(600, 600, game);
  textFont(font1);
  rectMode(CENTER);
  player = new Player(playerSheet);
}

function draw() {
  background("#2b425d");
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
