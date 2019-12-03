var car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  topSpeed: 160,
  topReverseSpeed: -50,
  accelerate: function() {
    this.speed++;
  },
  decelerate: function() {
    this.speed--;
  },
  openTrunk: function() {
    this.isTrunkOpen = true;
  },
  closeTrunk: function() {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function() {
    this.areLightsOn = true;
  },
  turnLightsOff: function() {
    this.areLightsOn = false;
  },
  flashLights: function() {
    this.turnLightsOff();
    this.turnLightsOn();
    setTimeout(() => {
      this.turnLightsOff(); 
    }, 1000);
  },
  stop: function() {
    this.speed = 0;
  },
  setSpeed: function(x) {
    if (x > this.topSpeed) {
      console.warn(`Viteza trebuie sa fie mai mica decat ${this.topSpeed}!`);
      this.speed = this.topSpeed;
    } else if (x < this.topReverseSpeed) {
      console.warn(`Viteza trebuie sa fie mai mare decat ${this.topReverseSpeed}!`);
      this.speed = this.topReverseSpeed;
    } else {
      this.speed = x;
    }
  }
};

console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);
for(var i = 0; i < 5; i++) {
  car.decelerate();
}
console.log(`Viteza noua este ${car.speed} km/h.`);
car.stop();
console.log(`Viteza este ${car.speed}.`);
car.setSpeed(188);
car.setSpeed(-80);
car.setSpeed(60);
console.log(car.speed);