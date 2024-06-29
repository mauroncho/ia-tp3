class Player {
  constructor() {
    this.x = 300;
    this.y = 550;
    this.width = 50;
    this.height = 50;
  }

  draw() {
    push();
    fill("red");
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  move() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
  }

  update() {
    this.draw();
    this.move();
  }
}
