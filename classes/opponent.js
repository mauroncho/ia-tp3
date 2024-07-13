class Opponent {
  constructor(x, vel, fill) {
    this.x = x;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.fill = fill;
    this.vel = vel;
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
