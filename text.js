class CustomText {
  constructor(x, y, text, size) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.size = size;
    this.fill = 255;
  }

  draw() {
    push();
    if (!this.hover()) {
      stroke("red");
      strokeWeight(5);
    } else {
      noStroke();
    }
    fill(this.fill);
    textAlign(CENTER, CENTER);
    textSize(this.size);
    text(this.text, this.x, this.y);
    pop();
  }

  hover() {
    return (
      this.x + this.size / 2 < mouseX ||
      this.x - this.size / 2 > mouseX ||
      this.y + this.size / 2 < mouseY ||
      this.y - this.size / 2 > mouseY
    );
  }

  // hoverEffect() {
  //   if (this.hover()) {
  //     stroke("red");
  //     strokeWeight(5);
  //   } else {
  //     noStroke();
  //   }
  // }

  update() {
    this.draw();
    this.hover();
    // this.hoverEffect();
  }
}
