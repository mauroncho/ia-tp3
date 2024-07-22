class Player {
  constructor(idleSheet, runSheet, hurtSheet, deadSheet) {
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
      hurt: { animation: hurtSheet, frames: 1 },
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
      this.width,
      this.animationSpeed,
      frames
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
    this.state = "hurt";
    // this.currentFrame = 0;
    if (this.life <= 0) {
      this.state = "dead";
      this.life = 3;
      return true;
    }
    return false;
  }

  lifeTracker() {
    return this.life;
  }

  //update engloba varios metodos que estan activos todo el tiempo
  update() {
    this.move();
    this.draw();
    this.lifeTracker();
  }
}
