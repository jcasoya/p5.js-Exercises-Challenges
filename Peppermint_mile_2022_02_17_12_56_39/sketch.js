function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  
  fill(255);
  circle(300, 300, 500);
  
  circle(200, 250, 100);
  circle(400, 250, 100);
  fill(255);
  
  let xc =constrain(mouseX, 180, 220);
  let xs = constrain(mouseY, 240, 260);
  fill(0);
  circle(xc,xs,40);
  
  let xa =constrain(mouseX, 380, 420);
  let xb = constrain(mouseY, 240, 260);
  fill(0);
  circle(xa,xb,40);
}
