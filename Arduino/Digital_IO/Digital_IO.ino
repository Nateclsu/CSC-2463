//https://youtube.com/shorts/2YuF6hMJYkl?feature=share

int ledPinRed = 5;
int ledPinBlue = 6;
int buttonOnePin = 9;
int buttonTwoPin = 8;

void setup() {
  pinMode(ledPinRed, OUTPUT);
  pinMode(ledPinBlue, OUTPUT);
  pinMode(buttonOnePin, INPUT_PULLUP);
  pinMode(buttonTwoPin, INPUT_PULLUP);
}

void loop() {
    if(digitalRead(buttonOnePin) == LOW) {
      digitalWrite(ledPinRed, HIGH);
      delay(500);
      digitalWrite(ledPinRed, LOW);

      digitalWrite(ledPinBlue, HIGH);
      delay(100);
      digitalWrite(ledPinBlue, LOW);
    }

    if(digitalRead(buttonTwoPin) == LOW) {
      digitalWrite(ledPinRed, HIGH);
      delay(100);
      digitalWrite(ledPinRed, LOW);

      digitalWrite(ledPinBlue, HIGH);
      delay(500);
      digitalWrite(ledPinBlue, LOW);
    }
}


