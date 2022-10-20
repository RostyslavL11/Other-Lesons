function conversUsd(rate, ...totals) {
    console.log(rate, totals);
    return totals.map(total => total / rate);
}

const total = conversUsd(40, 100, 4500, 700, 900, 650, 300);

const car = ['Tesla', 1111, 'red', '50000', '10%', '4wd'];

const [modal, id, ...options] = car;
console.log(modal, id, options);

////////////////////////////////////



const citiesUkraine = ['Тернопіль', 'Київ', 'Львів', 'Одеса'];
const citiesEurope = ['Берлин', 'Прага', 'Париж'];



// Spread
console.log(...citiesUkraine);
console.log(...citiesEurope);

const allCities = [...citiesUkraine, 'Берлін', ...citiesEurope];
// const allCities = citiesEurope.concat(citiesUkraine); // old way
console.log(allCities);


const citiesUkraineWithPopulation = {
    Ternopil: 20, 
    Kyiv: 8,
    Lviv: 5,
    Odessa: 3
};

const citiesEuropeWithPopulation = {
    Ternopil: 40, 
    Berlin: 10, 
    Praha: 3,
    Paris: 2
};

// console.log(...citiesUkraineWithPopulation); // error
console.log({...citiesUkraineWithPopulation}); // works
console.log({...citiesUkraineWithPopulation, ...citiesEuropeWithPopulation}); // works


// Practice
console.log(Math.max(5, 37, 42, 17)); // 42

// коли ми не знаємо скільки елементів в масиві і там треба визначити максимальне число 
const numbers = [5, 37, 42, 17];

console.log(Math.max(numbers)); // NaN
console.log(Math.max(...numbers));  // 42
console.log(Math.max.apply(null, numbers)); // 42 old way 


/////////
// коли нам треба отримати доступ до певних DON нодів
const divs = document.querySelectorAll('div');
console.log(divs); // NodeList(4) [div, div, div, div] - не масив а колекція DOM елементів 
// console.log(divs.map()); // error

// solution
const nodes = [...divs];
console.log(nodes); // works [div, div, div, div] тут вже масив. в прототипу вже присутні всі ті елементи та методи що в масиві 

console.log(divs, Array.isArray(divs)); // false 
console.log(divs, Array.isArray(nodes)); //  true


//////// Rest 

// нам треба додати елементи даного масиву 
const numbers2 = [1, 2, 3, 4, 5];


function sum(a, b, ...rest) {
    console.log(rest); // (3) [3, 4, 5]
    return a + b + rest.reduce((a, i) => a + i, 0); // 15
}

console.log(sum(...numbers2)); // 15


// отримуємо певні значення з даного масиву 
const numbers3 = [10, 45, 43, 74, 55];

// const a = numbers3[0];
// const b = numbers3[1];
// const [a, b] = numbers3; // деструкторизація. те саме що const a/b
// console.log(a, b); // 10 45


const [a, b, ...other] = numbers3;
console.log(a, b, other); // 10 45 (3) [43, 74, 55]


// така сама ситуація для обєктів 
const person = {
    name: 'Max',
    age: 20,
    city: 'Lviv',
    country: 'Ukraine'
};

const {name, age, ...address} = person;
console.log(name, age, address); // Max 20 {city: 'Lviv', country: 'Ukraine'}
