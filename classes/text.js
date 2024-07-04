class CustomText {
  constructor(x, y, text, size, showHover = true) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.size = size;
    this.fill = 255;
    this.showHover = showHover;
  }

  draw() {
    if (this.showHover) {
      push();

      if (!this.hover()) {
        stroke("red");
        strokeWeight(2);
      } else {
        noStroke();
      }
      fill(50);
      rect(this.x - this.size - 50, this.y, 20);
      rect(this.x + this.size + 50, this.y, 20);
      pop();
    }

    push();
    fill(this.fill);
    textAlign(CENTER, CENTER);
    textSize(this.size);
    text(this.text, this.x, this.y);
    pop();
  }

  hover() {
    return (
      this.x + (this.size * 2.8) / 2 < mouseX ||
      this.x - (this.size * 2.8) / 2 > mouseX ||
      this.y + this.size / 2 < mouseY ||
      this.y - this.size / 2 > mouseY
    );
  }

  update() {
    this.draw();
    if (this.showHover) this.hover();
  }
}
