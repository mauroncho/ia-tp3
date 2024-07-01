class Opponent {
  constructor(x, y, width, height, vel) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
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
