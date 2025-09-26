function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  lollipop(mouseX, 200, 150, 100);
  lollipop(100, mouseY, 75, 25);
  lollipop(500, 100, 400, 300);

  //lollipop (x,y,legth of the stick, size of the lolli);
}

function lollipop(x, y, stickLenght, lloliDiameter) {
  fill(100, 150, 200);
  rect(x - 10, y, 20, stickLenght);

  fill(0, 100, 400);
  ellipse(x, y, lloliDiameter);

  fill(200, 100, 300);
  rect(x - 10, y, 20, stickLenght);

  fill(0, 100, 400);
  ellipse(x, y, lloliDiameter);
}
