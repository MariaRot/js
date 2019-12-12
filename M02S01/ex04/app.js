class Car {
    constructor(color, hubCapColor) {
        this.color = color;
        this.hubCapColor = hubCapColor;

        this.frame = document.createElement('div');
        this.frame.classList.add('frame');

        this.car = document.createElement('div');
        this.car.classList.add('car');

        this.carTop = document.createElement('div');
        this.carTop.classList.add('car__top');
        this.carTop.style.backgroundColor = this.color;

        this.carBody = document.createElement('div');
        this.carBody.classList.add('car__body');
        this.carBody.style.backgroundColor = this.color;

        this.lightFront = document.createElement('div');
        this.lightFront.classList.add('light');
        this.lightFront.classList.add('light--front');

        this.lightBack = document.createElement('div');
        this.lightBack.classList.add('light');
        this.lightBack.classList.add('light--back');

        this.wheelFront = document.createElement('div');
        this.wheelFront.classList.add('wheel');
        this.wheelFront.classList.add('car__wheel');
        this.wheelFront.classList.add('car__wheel--front');

        this.wheelBack = document.createElement('div');
        this.wheelBack.classList.add('wheel');
        this.wheelBack.classList.add('car__wheel');
        this.wheelBack.classList.add('car__wheel--back');

        this.hubCapFront = document.createElement('div');
        this.hubCapFront.classList.add('wheel__cap');
        this.hubCapFront.style.backgroundColor = this.hubCapColor;

        this.hubCapBack = document.createElement('div');
        this.hubCapBack.classList.add('wheel__cap');
        this.hubCapBack.style.backgroundColor = this.hubCapColor;

        this.wheelFront.appendChild(this.hubCapFront);
        this.wheelBack.appendChild(this.hubCapBack);
        this.carBody.appendChild(this.lightBack);
        this.carBody.appendChild(this.lightFront);
        this.carBody.appendChild(this.wheelBack);
        this.carBody.appendChild(this.wheelFront);
        this.car.appendChild(this.carTop);
        this.car.appendChild(this.carBody);
        this.frame.appendChild(this.car);
        document.body.appendChild(this.frame);

    }

    turnLightsOn() {
        this.lightFront.classList.add('light--on');
    }

    turnLightsOff() {
        this.lightFront.classList.remove('light--on');
    }

    toggleLights() {
        this.lightFront.classList.toggle('light--on');
    }

    changeColor(color) {
        this.carTop.style.backgroundColor = color;
        this.carBody.style.backgroundColor = color;
    }
}

let car1 = new Car('green', 'gray');
let car2 = new Car('purple', 'white');
let car3 = new Car('blue', 'turquoise');
