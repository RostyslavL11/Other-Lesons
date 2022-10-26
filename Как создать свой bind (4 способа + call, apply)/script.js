// метод bind це нативний метод в JS який дозволяє привязувати контекст 
const person = {
    name: 'Ross',
    
};

function info(phone, email) {
    console.log(`Name: ${this.name}, Phone number: ${phone}, Email: ${email}`);
}

info.bind(person); // нічо не відбудеться 

// const bound = info.bind(person)(); // Name: Ross, Phone number: undefined
// const bound = info.bind(person)('12345678'); // Name: Ross, Phone number: 12345678, Email: undefined
const bound = info.bind(person)('12345678', 'R@gmail.com'); //Name: Ross, Phone number: 12345678, Email: R@gmail.com

// фнткція до якої ми вик bind вона не звжди працює тільки з контекстом там можуть бути інші параметри 



// метод bind по замовчуванню якщо ми звертаємось до функції до якої хочемо вик bind то в нас є можливість передавати якісь додаткові параметри які будуть зафіксоваді до даної функції

info.bind(person, '12345678')(); // Name: Ross, Phone number: 12345678, Email: undefined
info.bind(person, '12345678')('R@gmail.com'); //Name: Ross, Phone number: 12345678, Email: R@gmail.com
info.bind(person, '12345678', 'R@gmail.com'); //Name: Ross, Phone number: 12345678, Email: R@gmail.com

// реалізуємо такий метод але своїми силами 

// 1 простий 

function bindExample(fn, context) {
    return fn.bind(context);
}

bindExample(info, person)('12345678', 'R@gmail.com'); // Name: Ross, Phone number: 12345678, Email: R@gmail.com
bindExample(info, person, '12345678')('R@gmail.com'); // Name: Ross, Phone number: R@gmail.com, Email: undefined
bindExample(info, person, '12345678', 'R@gmail.com')(); // Name: Ross, Phone number: R@gmail.com, Email: undefined

// тут треба викорочтати rest оператор
function bindExampleWithRest(fn, context, ...rest) { // тут оператор rest 
    return fn.bind(context, ...rest); // тут оператор spread 
}
bindExampleWithRest(info, person)('12345678', 'R@gmail.com'); // Name: Ross, Phone number: 12345678, Email: R@gmail.com
bindExampleWithRest(info, person, '12345678')('R@gmail.com'); // Name: Ross, Phone number: 12345678, Email: R@gmail.com
bindExampleWithRest(info, person, '12345678', 'R@gmail.com')(); // Name: Ross, Phone number: 12345678, Email: R@gmail.com

// 2 реалізовуємо метод bind  без вбудованих методів (call, bind, apply) совоїми силами 
function bindExampleByUs(fn, context, ...rest) {
    return function(...args) { // це функція яку ми вкликаємо після роботи метода bind 
        const uniqId = Date.now().toString();

        context[uniqId] = fn;

        const result = context[uniqId](...rest.concat(args));

        delete context[uniqId];

        return result;
    };
}

bindExampleByUs(info, person)('12345678', 'R@gmail.com'); // Name: Ross, Phone number: 12345678, Email: R@gmail.com
bindExampleByUs(info, person, '12345678')('R@gmail.com'); // Name: Ross, Phone number: 12345678, Email: R@gmail.com
bindExampleByUs(info, person, '12345678', 'R@gmail.com')(); // Name: Ross, Phone number: 12345678, Email: R@gmail.com

console.log(person); // { name: 'Ross' }


// 3 як реалізовувати метод bind але вже використовуючи вбудовані методи, але не самий метод bind та реалізація в ES 5

function bindES5(fn, context) {
    const rest = Array.prototype.slice.call(arguments, 2);
    return function() {
        const args = Array.prototype.slice.call(arguments);
       return fn.apply(context, rest.concat(args));
    };
}

bindES5(info, person)('12345678', 'R@gmail.com'); 
bindES5(info, person, '12345678')('R@gmail.com'); 
bindES5(info, person, '12345678', 'R@gmail.com')();


// 4 ES6
function bindES6(fn, context, ...rest) {
    return function(...args) {
        // return fn.apply(context, rest.concat(args));
        return fn.call(context, ...rest.concat(args));
    };
}

bindES6(info, person)('12345678', 'R@gmail.com'); 
bindES6(info, person, '12345678')('R@gmail.com'); 
bindES6(info, person, '12345678', 'R@gmail.com')();


// як створюються методи call / apply 
// call не повертає нову функцію, а відразу її викликає але прицьому він привязує контекст 
function CreateCall(fn, context, ...args) {
    const uniqId = Date.now().toString();

        context[uniqId] = fn;

        const result = context[uniqId](...args);

        delete context[uniqId];

        return result;
}

CreateCall(info, person, '1234', 'Call@gmail.com');

// apply 

function CreateApply(fn, context, args) {
    const uniqId = Date.now().toString();
    
    context[uniqId] = fn;
    
    const result = context[uniqId](...args);
    
    delete context[uniqId];
    
    return result;
}

CreateApply(info, person, ['1234', 'Apply@gmail.com']);
