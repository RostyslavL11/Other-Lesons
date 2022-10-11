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
    logInfo: function() {
        console.group(`${this.name} info`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.groupEnd();
    }
};

const Olena = {
    name: 'Helen',
    age: 23
};

// bind - не викликає функцію, а повертає нову функцію, яка вже привязала до себе новий контекст
person.logInfo.bind(Olena); // nothing 
person.logInfo.bind(Olena)();  
