function setup() {
  createCanvas(600, 300);
}


function draw() {
  
  background(0);
  
  fill(255,255,0);
  circle(150, 150, 250)
  fill(0);
  triangle(150, 160, 10, 20, 10, 300);

  fill(255, 0, 0);
  square(320, 25, 250, 200, 200, 0, 0);

  fill(255,255,255);
  noStroke();
  circle(380, 160, 80);
  circle(510, 160, 80);

  fill(0,0,255);
  circle(380, 160, 50);
  circle(510, 160, 50);

}