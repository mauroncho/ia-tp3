class Opponent {
  constructor(x, vel, width, height, fill, spriteSheet) {
    this.x = x;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.fill = fill;
    this.vel = vel;
    this.sprite = spriteSheet;
    this.animationSpeed = 12;
    this.internalCounter = 0;
  }

  draw() {
    push();
    fill(this.fill);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  move() {
    this.y += this.vel;
  }

  floorCollision() {
    return this.y + this.height / 2 > 533;
  }

  update() {
    this.draw();
    this.move();
  }
}

class Diamond extends Opponent {
  constructor(x, vel, width, height, fill, spriteSheet) {
    super(x, vel, width, height, fill, spriteSheet);
    this.frames = 7;
  }

  draw() {
    push();
    translate(this.x, this.y);
    // fill(this.fill);
    // rect(0, 0, this.width, this.height);
    if (frameCount % this.animationSpeed == 0) {
      console.log(this.internalCounter);

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
      0,
      0,
      32,
      32,
      this.animationSpeed,
      this.frames
    );
    pop();
  }
}

class Fire extends Opponent {
  constructor(x, vel, width, height, fill) {
    super(x, vel, width, height, fill);
  }
}
