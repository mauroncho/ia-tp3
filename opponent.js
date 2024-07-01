class Opponent {
  constructor(x, vel) {
    this.x = x;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.vel = vel;
  }

  draw() {
    push();
    fill(255, 255, 0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  move() {
    this.y += this.vel;
  }

  floorCollision() {
    return this.y + this.height / 2 > 600;
  }

  update() {
    this.draw();
    this.move();
  }
}
