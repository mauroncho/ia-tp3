class Player {
  constructor(sheet) {
    this.x = 300;
    this.y = 600 - 125;
    this.width = 42;
    this.height = 64;
    this.vel = 5;
    this.life = 3;
    this.sheet = sheet;
    this.animationData = [];
  }

  draw() {
    push();
    image(this.sheet, this.x, this.y, this.width, this.height, 0, 32, 24, 32);
    pop();
  }

  receiveDamage() {
    this.life--;
    // console.log(this.life);
    if (this.life == 0) {
      this.life = 3;
      return true;
    }
  }

  move() {
    this.x = constrain(this.x, 0 + this.width / 2, width - this.width / 2);
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.vel;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.vel;
    }
  }

  update() {
    this.draw();
    this.move();
  }
}

//GPT hint
/*
let counter = 0;
let frameTimer = 0;
const frameInterval = 10; // Cambia este valor para ajustar la velocidad de la animación

function spriteSheet(sheet, dx, dy, dw, dh, sx, sy, sw, sh, frameNumber) {
  if (frameTimer % frameInterval === 0) {
    image(sheet, dx, dy, dw, dh, sx + sw * counter, sy, sw, sh);
    counter = (counter < frameNumber - 1) ? counter + 1 : 0;
    console.log(counter);
  }
  frameTimer++;
}

class Player {
  constructor(runSheet, idleSheet, hurtSheet, deadSheet) {
    this.x = 300;
    this.y = 600 - 125;
    this.width = 42;
    this.height = 64;
    this.vel = 5;
    this.life = 3;
    this.sheets = {
      run: runSheet,
      idle: idleSheet,
      hurt: hurtSheet,
      dead: deadSheet
    };
    this.currentAnimation = 'idle';
  }

  draw() {
    push();
    let sheet = this.sheets[this.currentAnimation];
    let frames = 7; // Número de frames en la animación actual, puedes ajustarlo según la animación
    spriteSheet(sheet, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height, frames);
    pop();
  }

  receiveDamage() {
    this.life--;
    this.currentAnimation = 'hurt';
  }

  move() {
    this.x = constrain(this.x, 0 + this.width / 2, width - this.width / 2);
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.vel;
      this.currentAnimation = 'run';
    } else if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.vel;
      this.currentAnimation = 'run';
    } else {
      this.currentAnimation = 'idle';
    }
  }

  update() {
    this.draw();
    this.move();
  }
}
*/
