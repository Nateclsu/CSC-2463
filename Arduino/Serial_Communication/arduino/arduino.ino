//https://youtube.com/shorts/STYWkwirg8k
#include <Arduino_JSON.h>

const int Button = 2;
int ButtonState = 0;
int ButtonVal = 0;
const int ledPin = 3;

JSONVar serialOutput;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  pinMode(Button, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  //INPUT
  ButtonState = digitalRead(Button);
  delay(100);


  byte brightness;
  if(Serial.available()) {
    brightness = Serial.read();
    analogWrite(ledPin,brightness);
  }
  
  Serial.println(ButtonState);
}
