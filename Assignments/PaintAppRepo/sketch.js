let red = '#FF0000';
let orange = '#FFA500';
let yellow = '#FFFF00';
let green = '#00FF00';
let cyan = '#00FFFF';
let blue = '#0000FF';
let magneta = '#FF00FF';
let brown = '#964B00';
let white = '#FFFFFF';
let black = '#000000';
let yourColor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(255);
  strokeWeight(2);
  fill(red);
  square(0, 0, 40);
  fill(orange);
  square(0, 40, 40);
  fill(yellow);
  square(0, 80, 40);
  fill(green);
  square(0, 120, 40);
  fill(cyan);
  square(0, 160, 40);
  fill(blue);
  square(0, 200, 40);
  fill(magneta);
  square(0, 240, 40);
  fill(brown);
  square(0, 280, 40);
  fill(white);
  square(0, 320, 40);
  fill(black);
  square(0, 360, 40);

  if(mouseIsPressed) {
    if(mouseX <= 40 && mouseY <= 400) {
      pickingColor();
    }
    else {
      stroke(yourColor);
      strokeWeight(10);
      line(pmouseX, pmouseY, mouseX, mouseY);
      console.log(mouseX, mouseY);
    }
  }
}

function pickingColor() {
  if(mouseY <= 40 && mouseX <= 40) {
    yourColor = red;
  }
  else if((mouseY <= 80 && mouseY > 40) && mouseX <= 40) {
    yourColor = orange;
  }
  else if((mouseY <= 120 && mouseY > 80) && mouseX <= 40) {
    yourColor = yellow;
  }
  else if((mouseY <= 160 && mouseY > 120) && mouseX <= 40) {
    yourColor = green;
  }
  else if((mouseY <= 200 && mouseY > 160) && mouseX <= 40) {
    yourColor = cyan;
  }
  else if((mouseY <= 240 && mouseY > 200) && mouseX <= 40) {
    yourColor = blue;
  }
  else if((mouseY <= 280 && mouseY > 240) && mouseX <= 40) {
    yourColor = magneta;
  }
  else if((mouseY <= 320 && mouseY > 280) && mouseX <= 40) {
    yourColor = brown;
  }
  else if((mouseY <= 360 && mouseY > 320) && mouseX <= 40) {
    yourColor = white;
  }
  else if((mouseY <= 400 && mouseY > 360) && mouseX <= 40) {
    yourColor = black;
  }
}