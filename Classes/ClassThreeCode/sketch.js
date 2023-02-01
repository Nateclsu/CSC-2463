let x = 200;
let y = 200;
let hue = 0;
let sat = 100;
const VALUE = 100;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  angleMode(DEGREES);
  drawFace();
}

function draw() {
  background(0, 0, 0);

  if(mouseIsPressed) {
    if(mouseButton === LEFT) {
      x = mouseX;
      y = mouseY;
    }
    else if (mouseButton === CENTER) {
      y = mouseX;
      x = mouseY;
    }
    
    let halfX = width/2;
    let halfY = height/2;

    let a = atan2(mouseY - halfY, mouseX - halfX);
    let d = dist(mouseX, mouseY, halfX, halfY);

    sat = d / sqrt(halfX*halfY) * 100;

    hue = a + 100;

    drawFace(x,y);
    drawFace(x+70,y+70);
  }
}

function drawFace(x,y) {
  fill(hue,sat,100);
  circle(x,y,50);
  fill('black');
  square(x, y-10, 5);
  square(x+10, y-10, 5);
  square(x+5, y+5, 5);
}