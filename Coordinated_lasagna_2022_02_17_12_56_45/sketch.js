let circleX = 300;

function setup() {
  createCanvas(800, 800);
}

function mousePressed() {
  circleX = 0;
}

function draw() {
  background(0);
  noStroke();
  fill(mouseY, 255, mouseX, mouseY);
  circle(circleX, mouseY, mouseX);

  circleX = circleX + 1;
}
