class Opponent {
  constructor(x, vel, width, height, spriteSheet) {
    this.x = x;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.vel = vel;
    this.sprite = spriteSheet;
    this.animationSpeed = 3;
    this.internalCounter = 0;
  }

  move() {
    this.y += this.vel;
  }

  floorCollision() {
    return this.y + this.height / 2 > 540;
  }

  update() {
    this.draw();
    this.move();
  }
}

//CLASE DIAMANTES
class Diamond extends Opponent {
  constructor(x, vel, width, height, spriteSheet) {
    super(x, vel, width, height, spriteSheet);
    this.frames = 7;
  }

  draw() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.sprite, 0, 0, this.width, this.height, 0, 0, 32, 32);
    pop();
  }
}

//CLASE FUEGO
class Fire extends Opponent {
  constructor(x, vel, width, height, spriteSheet) {
    super(x, vel, width, height, spriteSheet);
    this.internalCounter = 0;
    this.frames = 7;
  }

  draw() {
    push();
    translate(this.x, this.y);
    if (frameCount % this.animationSpeed == 0) {
      if (this.internalCounter < this.frames) {
        this.internalCounter++;
      } else {
        this.internalCounter = 0;
      }
    }

    imageMode(CENTER);
    image(
      this.sprite,
      0,
      0,
      this.width,
      this.height,
      0 + 100 * this.internalCounter,
      0,
      100,
      100
    );
    pop();
  }
  floorCollision() {
    return this.y + this.height / 2 > 557;
  }
}
