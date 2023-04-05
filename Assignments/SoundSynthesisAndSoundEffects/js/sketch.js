// create a new amplitude envelope with some parameters
const ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.2,
  sustain: 0.6,
  release: 0.4
}).toDestination();

// create a filter with some parameters
const filter = new Tone.Filter({
  type: "lowpass",
  frequency: 500,
  rolloff: -12,
  Q: 1
}).connect(ampEnv);

// create a noise synth with an amplitude envelope
const noiseSynth = new Tone.NoiseSynth({
  volume: -6,
  noise: {
    type: "brown"
  },
  envelope: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.1,
    release: 0.1
  }
}).connect(filter);

// create an oscillator with some parameters
const oscillator = new Tone.Oscillator({
  type: "triangle",
  frequency: 220,
  volume: -12
}).connect(filter);

// create a tremolo effect with some parameters
const tremolo = new Tone.Tremolo({
  frequency: 10,
  depth: 0.8,
  spread: 180
}).connect(filter);

// create a part to play a sequence of notes
const part = new Tone.Part((time, note) => {
  oscillator.frequency.setValueAtTime(note, time);
  noiseSynth.triggerAttackRelease("16n", time);
}, [
  ["0:0", "G3"],
  ["0:2", "C4"],
  ["0:3:2", "E4"],
  ["1:1:2", "C4"],
  ["2:0", "G3"],
  ["2:2", "C4"],
  ["2:3:2", "E4"],
  ["3:1:2", "C4"]
]).start(0);

// start the transport and loop the sequence
Tone.Transport.start();
part.loop = true;
Tone.Transport.bpm.value += 200;


function keyPressed() {
  if (keyCode === 32) {
    ampEnv.triggerAttack();
    img = loadImage("assets/Train.png");
  }
} 

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  if (keyIsPressed && keyCode === 32 && img) {
    image(img, 10, -20, 380, 390);
  } 
  else {
    textAlign(CENTER);
    textSize(24);
    text("Press spacebar to load the image", width/2, height/2);
  }

}

