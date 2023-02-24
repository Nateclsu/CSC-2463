
// let sound1 = new Tone.Player("sounds/chicken.wav");

let sounds = new Tone.Players({

  "Anakin": "sounds/Anakin.mp3",
  "Obi-Wan": "sounds/ChosenOne.mp3",
  "Vader": "sounds/Breathing.mp3",
  "Father": "sounds/Father.mp3"

})

const delay = new Tone.FeedbackDelay("8n", 0.5);

let soundNames = ["Anakin", "Obi-Wan", "Vader", "Father"];
let buttons = [];

let dSlider;
let fSlider;

// let button1, button2, button3;

function preload() {
  vader = loadImage("/imgs/Vader.png")
}

function setup() {
  createCanvas(500, 500);
  textSize(20);
  sounds.connect(delay);
  delay.toDestination();

 /* soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index*20, index*50);
    buttons[index].mousePressed( () => buttonSound(word))
  })
  */

  buttons[0] = createButton(soundNames[0]);
  buttons[0].position(200, 50);
  buttons[0].style('width', '100px');
  buttons[0].style('background-color', 'RGB(13,13,13)')
  buttons[0].style('color', 'white');
  buttons[0].mousePressed( () => buttonSound("Anakin"));

  buttons[1] = createButton(soundNames[1]);
  buttons[1].position(200, 100);
  buttons[1].style('width', '100px');
  buttons[1].style('background-color', 'RGB(13,13,13)')
  buttons[1].style('color', 'white');
  buttons[1].mousePressed( () => buttonSound("Obi-Wan"));

  buttons[2] = createButton(soundNames[2]);
  buttons[2].position(200, 150);
  buttons[2].style('width', '100px');
  buttons[2].style('background-color', 'RGB(13,13,13)')
  buttons[2].style('color', 'white');
  buttons[2].mousePressed( () => buttonSound("Vader"));

  buttons[3] = createButton(soundNames[3]);
  buttons[3].position(200, 200);
  buttons[3].style('width', '100px');
  buttons[3].style('background-color', 'RGB(13,13,13)')
  buttons[3].style('color', 'white');
  buttons[3].mousePressed( () => buttonSound("Father"));
  
  dSlider = createSlider(0., 1., 0.5, 0.05);
  dSlider.position(100, 500);
  dSlider.mouseReleased( () => {
    delay.delayTime.value = dSlider.value(1);
  })

  fSlider = createSlider(0., 1., 0.5, 0.05);
  fSlider.position(300, 500);
  fSlider.mouseReleased( () => {
    delay.feedback.value = fSlider.value();
  })


}

function draw() {
  background(vader);
  text('P R E S S   B U T T O N S   F O R   S O U N D', 40, 485)
  text.style();

}

function buttonSound(whichSound) {
    sounds.player(whichSound).start();
}