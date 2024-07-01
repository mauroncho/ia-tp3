class Player {
  constructor() {
    this.x = 300;
    this.y = 550;
    this.width = 50;
    this.height = 50;
    this.vel = 5;
  }

  draw() {
    push();
    fill("red");
    rect(this.x, this.y, this.width, this.height);
    pop();
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
  // move() {
  //   if (keyIsDown(RIGHT_ARROW)) {
  //     this.x = constrain(this.x + this.vel, 0, width - this.width / 2); // Limita la posición x a dentro del canvas
  //   }
  //   if (keyIsDown(LEFT_ARROW)) {
  //     this.x = constrain(this.x - this.vel, 0, width + this.width); // Limita la posición x a dentro del canvas
  //   }
  // }

  update() {
    this.draw();
    this.move();
  }
}
