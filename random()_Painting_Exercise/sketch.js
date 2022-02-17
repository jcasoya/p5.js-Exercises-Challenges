let r = 0;
let g = 0;
let b = 0;
let diameter = 32;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  noStroke();
  fill(r, g, b);
  circle(mouseX, mouseY, diameter);
}

function mousePressed() {
  // background(0);
  r = random(100, 255);
  g = random(100, 255);
  b = random(100, 255);
  diameter = random(16, 64);
}
