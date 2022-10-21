const widthOfCar = '1000mm';

const auto = {
    model: 'Tesla',
    year: 2020,
    color: 'silver',
    dimensions: {
        size: {
            widthOfCar: '1,99mm',
            lengthOfCar: '5,036mm'
        }
    }
};

// old way 
// const model = auto.model;

const {model, year, color} = auto;
console.log(model, year, color);

//уникаємо конфлікта з widthOfCar
const {widthOfCar: carWidth, lengthOfCar} = auto.dimensions.size;

console.log(carWidth, lengthOfCar);

// ми можемо встановлювати дефолтні значення для змінних які ми отримуємо під час деструктивізації 


const car = {
    carModel: 'BMW',
    carYear: 2020,
};

const {carModel, carYear, carColor = 'green'} = car;
console.log(carModel, carYear, carColor);


//////
const autoArr = ['Tesla', '2020', 'green'];

// отримуємо значення old way 
// const autoArrModel = auto[0];
// const autoArrYear = auto[1];
// const autoArrColor = auto[3];


const [autoArrModel, autoArrYear, autoArrColor] = autoArr;
console.log(autoArrModel, autoArrYear, autoArrColor);


//////
// деколи ми отримуємо деякі з наших даних у вигляді рядків і якщо вони записані через розділювач. ми також можемо вик деструктуризацію щоб отримати наші дані 

const autoString = 'Tesla,2020,green,20,discount';

const [nameString, yearString, colorString, ...dealer] = autoString.split(',');
console.log(nameString, yearString, colorString, dealer); //Tesla 2020 green (2) ['20', 'discount']

//20,discount отримуємо в іншу змінну 
const [quantity, discount] = dealer;
console.log(quantity, discount);

/////////////////
// міняємо змінні місцями при деструктизації
let left = 'Left';
let right = 'Right';

[right, left] = [left, right];

console.log({left, right}); // {left: 'Right', right: 'Left'}

////////////////////////
// диструктизація змінних з функції 
function convertUAH(hryvna) {
    const complete = {
        EUR: hryvna * 37,
        USD: hryvna * 39,
        GBP: hryvna * 42
    };
    return complete;
}

const {EUR, USD} = convertUAH(5000);
console.log(EUR, USD);

////////////////
// функція яка розраховує вартість доставки включаючи вартість товару
// робимо так щоб порядок передачі аргументів не мав значення  
function getTotal({total = 1000, shipment = 0.1} = {}) {
    return total + total * shipment;
}

// const total = getTotal(); // навіть якщо в нас є дефолтні значення але ми не передали нічого в аргументи буде помилка, треба зробити дефолтні значення для пустого обєкта 
const total = getTotal({shipment:0.2, total:1000});
console.log(total);