// Контекст вызова. This
// 'use strict';

function hello() {
    console.log('hello', this);
}

const person = {
    name: 'Igor',
    age: 25,
    sayHello: hello,
    // sayHelloWindow: hello.bind(this) // this === window
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
};

const Olena = {
    name: 'Helen',
    age: 23
};

// bind - не викликає функцію, а повертає нову функцію, яка вже привязала до себе новий контекст
// person.logInfo.bind(Olena); // nothing 
// person.logInfo.bind(Olena)();  

//bind
// const fnOlenaInfoLog = person.logInfo.bind(Olena, 'Frontend', '38097792222');
// fnOlenaInfoLog('Frontend', '38097792222');
// fnOlenaInfoLog();

//call - викликає функцію відразу
// person.logInfo.call(Olena, 'Frontend', '38097792222');

// apply
person.logInfo.apply(Olena, ['Frontend', '38097792222']);

//////////////////////////////////////
// приклад як ми можемо застосувати контекст та прототипи 





// завдання
// написати таку функцію яка помножить кожне з значень певне число яке ми будемо передавати
const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//     return arr.map(function(i) {
//         return i * n;
//     });
// }
// console.log(multBy(array, 5));

// варіант з використання прототипу 
Array.prototype.multBy = function(n) {
        return this.map(function(i) {
        return i * n;
    });
};

console.log(array.multBy(2));

