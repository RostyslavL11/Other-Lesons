// Функции-конструкторы

// варіант без класу
// function Car(brand, color) {
//     this.brand = brand;
//     this.color = color;
// }

// Car.prototype.start = function() {
//     console.log(`${this.brand} - start!`)
// }
// Car.prototype.start = function() {
//     console.log(`${this.brand} - ${this.color} - start!`)
// }
// Car.prototype.stop = function() {
//     console.log(`${this.brand} - STOP!`)
// }

// const tesla = new Car('Tesla', 'silver');
// const nissan = new Car('Nissan', 'red');
// console.log(tesla)







// створюємо клас
// обявлення 
// class Car {

// }

// вираження 
// const Car = class {

// }

// геттри та сеттери
// це спеціальні функції за допомогою який можна присвоювати або читати якість значення 

class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    start() {
        console.log(`${this.brand} - ${this.color} - start!`);
    }
    stop() {
        console.log(`${this.brand} - STOP!`);
    }
    // статичні методи 
    static discount() {
        console.log(`Total sale is - 10%`);
    }
    set rating(value) {
        this.score = value.toUpperCase();
    }
    get rating() {
        return this.score;
    }
}

const tesla = new Car('Tesla', 'silver');
const nissan = new Car('Nissan', 'red');

// ми можемо створювати дочірні класи 
class Car2 {
    constructor(brand) {
        this.brand = brand;
        this.gasTank = 100;
        this.zapravka = [];
    }
    getGas() {
        this.gasTank += 10;
        const stamp = Date.now();
        const time = new Date(stamp);
        this.zapravka.push(time.toString());
        return this.gasTank;
    }
    drive() {
        this.gasTank -= 10;
        return this.gasTank;
    }
}

class HybridCar extends Car2 {
    constructor(brand, model) {
        super(brand); // Car2(brand)
        this.model = model;
    }
    autoPark() {
        console.log('Autoparking');
    }
}

const lexus = new HybridCar('Lexus', 'RX');
const reno = new Car2('Reno')









