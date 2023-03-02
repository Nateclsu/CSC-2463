let slider;

const synth = new Tone.FMSynth();
const drum = new Tone.AMSynth();
const metal = new Tone.Synth({
  "frequency"  : 45 ,
	"envelope"  : 
  {
		"attack"  : 0.001 ,
		"decay"  : 0.004 ,
		"release"  : 0.02
	}  ,
	"harmonicity"  : 8.5 ,
	"modulationIndex"  : 40 ,
	"resonance"  : 3 ,
	"octaves"  : 1
});
const reverb = new Tone.JCReverb(0.4).toDestination();
synth.connect(reverb);
drum.connect(reverb);
metal.connect(reverb);


const {PingPongDelay} = ("tone");
const pingPong = new Tone.PingPongDelay().toDestination (
  {
    "delayTime": "4n",
    "feedback": 0.2,
    "wet": 0.5
  }
);
synth.connect(pingPong);
metal.connect(reverb);

const ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.5,
  decay: 0.6,
  sustain: 0.3,
  release: 0.2
})

let notes = {
  '1': 'A4',
  '2': 'B4',
  '3': 'C4',
  '4': 'D4',
  '5': 'E4',
  '6': 'F4',
  '7': 'G4',
  '8': 'A5'
}

function setup() {
  createCanvas(400, 400);

  reverb.toDestination();

  synth.release = .002;
  synth.resonance = 0.08;
  // synth.harmonicity.value = 1.25;

  slider = new Nexus.Slider('#slider');
  slider.on('change', ()=>
  {
    pingPong.delayTime.value = slider.value;
  })
}

function draw() {
  background(220);
}

function keyPressed() {
  
  
  let toPlay = notes[key];
  console.log(toPlay);


  synth.triggerAttackRelease(toPlay, 0.5);
  drum.triggerAttackRelease("A6", "8n", '+.25');
  // metal.triggerAttackRelease("A1", "8n");
}