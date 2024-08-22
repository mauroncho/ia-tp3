//fuentes
let fontDisplay;
let fontReg;
//imagenes
let bg;
let playerRun;
let playerIdle;
let playerDead;
let diamondSheet;
let fireSheet;
//sonido
let diamondScore;
let fireDmg;
let adventureMusic;
let bossMusic;
let winMusic;
//variables del juego
let gameScreen = 1;
let score = 0;
let diamondSpawn = 60;
let diamondMinVel = 3;
let diamondMaxVel = 6;
let fireSpawn = 75;
let fireMinVel = 3;
let fireMaxVel = 3;

function preload() {
  fontDisplay = loadFont("./assets/fonts/chp-fire.ttf");
  fontReg = loadFont("./assets/fonts/ChakraPetch-Regular.ttf");
  bg = loadImage("./assets/img/bg.png");
  playerIdle = loadImage("./assets/img/idle.png");
  playerRun = loadImage("./assets/img/run.png");
  playerDead = loadImage("./assets/img/dead.png");
  diamondSheet = loadImage("./assets/img/diamond-yellow.png");
  fireSheet = loadImage("./assets/img/fire.png");
  fireDmg = loadSound("./assets/audio/fire-dmg.mp3");
  diamondScore = loadSound("./assets/audio/diamond-score.mp3");
  adventureMusic = loadSound("./assets/audio/adventure.mp3");
  bossMusic = loadSound("./assets/audio/boss.mp3");
  winMusic = loadSound("./assets/audio/win.mp3");
}

function setup() {
  createCanvas(600, 600, game);
  textFont(fontReg);
  rectMode(CENTER);
  player = new Player(playerIdle, playerRun, playerDead);
  diamondScore.setVolume(0.05);
  fireDmg.setVolume(0.19);
  adventureMusic.setVolume(0.03);
  bossMusic.setVolume(0.03);
  winMusic.setVolume(0.05);
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
  } else if (gameScreen == 5) {
    winScreen();
  }
}
