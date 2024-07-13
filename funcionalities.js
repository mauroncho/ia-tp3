function mousePressed() {
  if (gameScreen == 1) {
    if (!hover(width / 2, height / 2 - 40, 145, 70)) {
      gameScreen = 2;
    } else if (!hover(width / 2, height / 2 + 30, 140, 30)) {
      gameScreen = 4;
    }
  }
}

function keyPressed() {
  if (gameScreen == 3) {
    if (keyCode === ENTER) {
      gameScreen = 1;
    }
  }
  if (gameScreen == 4) {
    if (keyCode === ENTER) {
      gameScreen = 1;
    }
  }
}

//HOVER SOBRE LOS TEXTOS DE INICIO
function hover(x, y, width, height) {
  return (
    x + width / 2 < mouseX ||
    x - width / 2 > mouseX ||
    y + height / 2 < mouseY ||
    y - height / 2 > mouseY
  );
}

//BACKGROUND IMG
function bgImg() {
  image(bg, 430, 70, 64, 64, 32 * 3, 0, 32, 32);
  for (let x = 0; x < width; x++) {
    image(bg, 0 + x * 64, height - 64, 64, 64, 32, 0, 32, 32);
  }
}

//DIBUJAR SPRITESHEETS PARA ANIMACIONES
//en la funcion image "d" significa destination y "s", source
//image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
let counter = 0;
function spriteSheet(
  sheet,
  dx,
  dy,
  dw,
  dh,
  sx,
  sy,
  sw,
  sh,
  animationSpeed,
  frameNumber
) {
  push();
  imageMode(CENTER);
  image(sheet, dx, dy, dw, dh, sx + sw * counter, sy, sw, sh);
  if (frameCount % animationSpeed == 0)
    counter < frameNumber ? counter++ : (counter = 0);
  pop();
}
