let spriteSheet;
let spriteSheet2;
let spriteSheet3;

let walkingAnimation;
let walkingAnimation2;
let walkingAnimation3;

function preload() {
  spriteSheet = loadImage("assets/PC Computer - Spelunky - Viking.png");
  spriteSheet2 = loadImage("assets/PC Computer - Spelunky - Cyclops.png")
  spriteSheet3 = loadImage("assets/PC Computer - Spelunky - Purple.png")
}

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);

  walkingAnimation = new WalkingAnimation(spriteSheet,80,80,random(0, 500),random(0, 500),9);
  walkingAnimation2 = new WalkingAnimation(spriteSheet2,80,80,random(0, 500),random(0, 500),9);
  walkingAnimation3 = new WalkingAnimation(spriteSheet3,80,80,random(0, 250),random(0, 250),9);
}

function draw() {
  background(220);
  
  walkingAnimation.draw();
  walkingAnimation2.draw();
  walkingAnimation3.draw();
}

function keyPressed() {
  walkingAnimation.keyPressed(RIGHT_ARROW,LEFT_ARROW);
  walkingAnimation2.keyPressed(LEFT_ARROW,RIGHT_ARROW);
  walkingAnimation3.keyPressed(LEFT_ARROW, RIGHT_ARROW);
}

function keyReleased() {
  walkingAnimation.keyReleased(RIGHT_ARROW,LEFT_ARROW);
  walkingAnimation2.keyReleased(LEFT_ARROW,RIGHT_ARROW);
  walkingAnimation3.keyReleased(LEFT_ARROW, RIGHT_ARROW);
}

class WalkingAnimation {
  constructor(spritesheet, sw, sh, dx, dy, animationLength, offsetX = 0, offsetY = 0) {
    this.spritesheet = spritesheet;
    this.sw = sw;
    this.sh = sh;
    this.dx = dx;
    this.dy = dy;
    this.u = 0;
    this.v = 0;
    this.animationLength = animationLength;
    this.currentFrame = 0;
    this.moving = 0;
    this.xDirection = 1;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }

  draw() {

    // if (this.moving != 0)
    //   this.u = this.currentFrame % this.animationLength;
    // else
    //   this.u = 0;

    this.u = (this.moving != 0) ? this.currentFrame % this.animationLength : 0;
    push();
    translate(this.dx,this.dy);
    scale(this.xDirection,1);
  
    image(this.spritesheet,0,0,this.sw,this.sh,this.u*this.sw+this.offsetX,this.v*this.sh+this.offsetY,this.sw,this.sh);
    pop();
    if (frameCount % 6 == 0) {
      this.currentFrame++;
    }
  
    this.dx += this.moving;
  }

  keyPressed(right, left) {
    if (keyCode === right) {
      this.moving = 1;
      this.xDirection = 1;
      this.currentFrame = 1;
    } else if (keyCode === left) {
      this.moving = -1;
      this.xDirection = -1;
      this.currentFrame = 1;
    }
  }

  keyReleased(right,left) {
    if (keyCode === right || keyCode === left) {
      this.moving = 0;
    }
  }
}