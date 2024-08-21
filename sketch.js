let font1;
let fontReg;
let displayFont;
let bg;
let playerRun;
let playerIdle;
let playerDead;
let diamondSheet;
let fireSheet;
let gameScreen = 1;
let score = 0;
let diamondSpawn = 60;
let diamondMinVel = 3;
let diamondMaxVel = 6;
let fireSpawn = 75;
let fireMinVel = 3;
let fireMaxVel = 3;

function preload() {
  font1 = loadFont("./assets/fonts/slkscr.ttf");
  fontReg = loadFont("./assets/fonts/ChakraPetch-Regular.ttf");
  displayFont = loadFont("./assets/fonts/chp-fire.ttf");
  bg = loadImage("./assets/img/bg.png");
  playerIdle = loadImage("./assets/img/idle.png");
  playerRun = loadImage("./assets/img/run.png");
  playerDead = loadImage("./assets/img/dead.png");
  diamondSheet = loadImage("./assets/img/diamond-yellow.png");
  fireSheet = loadImage("./assets/img/fire.png");
}

function setup() {
  createCanvas(600, 600, game);
  textFont(fontReg);
  rectMode(CENTER);
  player = new Player(playerIdle, playerRun, playerDead);
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
