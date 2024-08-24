class Player {
  constructor(idleSheet, runSheet, deadSheet) {
    this.x = 300;
    this.y = 474;
    this.width = 128;
    this.height = 128;
    this.vel = 5;
    this.life = 3;
    this.state = "idle";
    this.facingRight = true;
    this.animationData = {
      idle: { animation: idleSheet, frames: 4 },
      run: { animation: runSheet, frames: 7 },
      dead: { animation: deadSheet, frames: 3 },
    };
    this.animationSpeed = 5;
    this.internalCounter = 0;
  }

  draw() {
    const { animation, frames } = this.animationData[this.state];
    push();
    translate(this.x, this.y);
    if (!this.facingRight) {
      scale(-1, 1);
    }

    if (frameCount % this.animationSpeed == 0) {
      if (this.internalCounter < frames) {
        this.internalCounter++;
      } else {
        this.internalCounter = 0;
      }
    }
    imageMode(CENTER);
    image(
      animation,
      0,
      0,
      this.width,
      this.height,
      0 + this.width * this.internalCounter,
      0,
      this.height,
      this.width
    );
    pop();
  }

  move() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.vel;
      this.state = "run";
      this.facingRight = true;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.vel;
      this.state = "run";
      this.facingRight = false;
    } else {
      this.state = "idle";
    }
    this.x = constrain(
      this.x,
      0 + this.width / 2 - 35,
      width - this.width / 2 + 35
    );
  }

  //metodos que manejan la vida
  receiveDamage() {
    this.life--;
    if (this.life <= 0) return true;
    return false;
  }

  //no me sale implementar la muerte del jugador
  // deathAnimation() {
  //   this.state = "dead";
  //   this.vel = 0;
  // }

  restartPosition() {
    this.x = 300;
  }

  restartLife() {
    this.life = 3;
  }

  lifeTracker() {
    return this.life;
  }

  //update engloba varios metodos que estan activos todo el tiempo
  update() {
    this.draw();
    this.move();
    this.lifeTracker();
  }
}
