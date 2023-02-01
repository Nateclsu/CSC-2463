function setup() {
  createCanvas(200, 200);
}

function draw() {
  // blue background
  background(0, 0, 120);

  // making a green circle with a stroke that allows the white outline
  push();
  stroke(255);
  strokeWeight(3);
  fill(0, 125, 0);
  ellipse(100, 100, 100, 100);
  pop();

  // making a red star using vertexes and then added the same stroke to that 
  push();
  stroke(255);
  strokeWeight(3);
  fill(255, 0, 0);
  beginShape();
  vertex(148,85)
  vertex(113,85)
  vertex(100,50)
  vertex(87,85)
  vertex(52,85)
  vertex(80,105)
  vertex(70,140)
  vertex(100,118)
  vertex(130,140)
  vertex(120,105)
  endShape(CLOSE);
  pop();
}