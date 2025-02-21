//https://youtube.com/shorts/STYWkwirg8k

let port;
let writer, reader;
let slider;
let sensorData = 0;
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

function draw() {
  background(255, 0, 0);

  if (writer) {
    writer.write(new Uint8Array([ slider.value() ]));
  }


  if(reader) {
    serialRead();

    if(sensorData == 1) {
      background(0, 0, 255);
    }
  }
}


async function serialRead() {
  while(true) {
    const {value, done} = await reader.read();
    if(done) {
      reader.releaseLock();
      break;
    }
    console.log(value);
    sensorData = value;
  }
}

async function connect() {
  port = await navigator.serial.requestPort();

  await port.open({ baudRate:9600 });

  writer = port.writable.getWriter();

  reader = port.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TransformStream(new LineBreakTransformer()))
    .getReader();
}

class LineBreakTransformer {
  constructor() {
    // A container for holding stream data until a new line.
    this.chunks = "";
  }

  transform(chunk, controller) {
    // Append new chunks to existing chunks.
    this.chunks += chunk;
    // For each line breaks in chunks, send the parsed lines out.
    const lines = this.chunks.split("\r\n");
    this.chunks = lines.pop();
    lines.forEach((line) => controller.enqueue(line));
  }

  flush(controller) {
    // When the stream is closed, flush any remaining chunks out.
    controller.enqueue(this.chunks);
  }
}