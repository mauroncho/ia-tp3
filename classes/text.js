class CustomText {
  constructor(x, y, text, size, showHover = false, fill = 255) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.size = size;
    this.fill = fill;
    this.showHover = showHover;
  }

  draw() {
    push();
    if (this.showHover) {
      if (!this.hover()) {
        stroke("#8a041f");
        strokeWeight(1.5);
      } else {
        noStroke();
      }
    }

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
