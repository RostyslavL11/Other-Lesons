const auto = {
    brand: 'BMW',
    drive() {
        console.log(this);
        return `Заведемо наш ${this.brand}`;
    }
};

const motorBike = {
    brand: "Ducati"
};


const autoDrive = auto.drive.bind(auto);
const motorDrive = auto.drive.bind(motorBike);
const motorDrive2 = auto.drive.bind({brand: "Корабель"});

// const a = document.querySelector; // error
const a = document.querySelector.bind(document);

console.log(a === document.querySelector); // true

const header = a('h2');
console.log(header);

///////////////////////

const bill = {
    tip: 0.1,
    calculate(total) {
        // console.log(this);
        return total + total * this.tip;
    },
    detail(dish1, dish2, sum) {
        return `Ваш обід (${dish1}, ${dish2}) коштує ${this.calculate(sum)}`;
    }
};

// const pay = bill.calculate(1000);
// console.log(pay); //1100


// використовуємо calculate за межами обєкта bill 
// const payCount = bill.calculate.bind(bill);
const payFirDish = bill.detail('pizza', 'salad', 1000);
console.log(payFirDish);

const payCountForDish = bill.detail.call(bill, 'pizza', 'salad', 1000);
console.log(payCountForDish);

const payCountForDish2 = bill.detail.apply(bill, ['pizza', 'salad', 1000]);
console.log(payCountForDish2);


const pay = bill.calculate.bind(bill);
console.log(pay(1000));

const payCount = bill.calculate.call(bill, 1000);
console.log(payCount);

const payCount2 = bill.calculate.apply(bill, [1000]);
console.log(payCount2);



// питання з інтервю
// що буде якщо добавити декілька bind
// відповідь - контекст привязується один раз і ми не можемо його повторно перепривязувати до лінцюгу як в прикладі 
// const payCount = bill.calculate.bind({ tip: 0.2}).bind({ tip: 0.2}).bind({ tip: 0.5});


