// https://youtube.com/shorts/IKUPnxZF6wY
// Game Objective - A game with a gamble! Get the light to as bright as you can without turning it off.
// Rules - If the light goes off, that player automatically loses. If a player gets the light to its brightest
// point then they automatically win. 
// Challenge - You don't know when the light will go off. 
// Interaction - The players twist the potentiometer left to right to increase the LED brightness.

int potPin = A1;
int ledPin = 6;
int potVal;
float ledVal;

void setup() {
  pinMode(potPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  potVal = analogRead(potPin);
  ledVal = (255./1023.)*potVal;
  
  if(potVal < 799) {
    analogWrite(ledPin, ledVal);
  }
  else {
    digitalWrite(ledPin, LOW);
  }
  
  Serial.println(potVal);
  delay(1);
}
