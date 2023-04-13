let port;
let writer;
let slider;
let red, green, blue;
const encoder = new TextEncoder();

function setup() {
  createCanvas(400, 400);

  if('serial' in navigator) {
    let button = createButton("connect");
    button.position(0, 0);
    button.mousePressed(connect);

    slider = createSlider(0, 255, 127);
    slider.position(10, 50);
    slider.style('width', '100px');
  }
}

function mouseMoved() {
  red = round(map(mouseX, 0, width, 0, 255));
  green = round(map(mouseY, 0, height, 0, 255));
  blue = slider.value();
}

function draw() {
  background(220);

  if (writer) {
    writer.write(encoder.encode(red + "," + green + "," + blue + "\n"));
  }
}

async function connect() {
  port = await navigator.serial.requestPort();

  await port.open({ baudRate:9600 });

  writer = port.writable.getWriter();
}
