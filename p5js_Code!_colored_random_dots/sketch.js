let x, y, r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  r = random(10, 120);
  g = random(120);
  b = random(255);
  x = random(width);
  y = random(height);
  noStroke();
  fill(r, g, b, 100);
  circle(x, y, 24);
}
