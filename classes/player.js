class Player {
  constructor(sheet) {
    this.x = 300;
    this.y = 600 - 125;
    this.width = 42;
    this.height = 64;
    this.vel = 5;
    this.life = 3;
    this.sheet = sheet;
  }

  draw() {
    push();
    // fill("yellow");
    // rect(this.x, this.y, this.width, this.height);
    image(this.sheet, this.x, this.y, this.width, this.height, 0, 32, 24, 32);
    pop();
  }

  receiveDamage() {
    this.life--;
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
