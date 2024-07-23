let font1;
let bg;
let playerRun;
let playerIdle;
let playerDead;
let playerHurt;
let diamondSheet;
let fireSheet;
let gameScreen = 1;
let score = 0;

function preload() {
  font1 = loadFont("./assets/fonts/slkscr.ttf");
  bg = loadImage("./assets/img/bg.png");
  playerIdle = loadImage("./assets/img/idle.png");
  playerRun = loadImage("./assets/img/run.png");
  playerDead = loadImage("./assets/img/dead.png");
  playerHurt = loadImage("./assets/img/hurt.png");
  diamondSheet = loadImage("./assets/img/diamond-yellow.png");
  fireSheet = loadImage("./assets/img/fire.png");
}

function setup() {
  createCanvas(600, 600, game);
  textFont(font1);
  rectMode(CENTER);
  player = new Player(playerIdle, playerRun, playerHurt, playerDead);
}

function draw() {
  background("#2b425d");
  if (gameScreen == 1) {
    gameIndex();
  } else if (gameScreen == 2) {
    playScreen();
  } else if (gameScreen == 3) {
    gameOverScreen();
  } else if (gameScreen == 4) {
    creditsScreen();
  }
}
