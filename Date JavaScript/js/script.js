'use strict';

const d1 = new Date();
// Tue Sep 27 2022 21:10:16 GMT+0300 (Eastern European Summer Time)
console.log(d1);


// мілісекунди
const d2 = new Date(1664302655000);
console.log(d2);

const d3 = new Date(2022, 9, 6, 11, 15)
console.log(d3);
console.log(typeof d3);


// рядок в обєкт 
const d4 = new Date('Tue Sep 27 2021 21:10:16 GMT+0300 (Eastern European Summer Time)');
console.log(d4);

document.querySelector('.out-1').innerHTML = d4;
document.querySelector('.out-2').innerHTML = d4.toUTCString();
document.querySelector('.out-3').innerHTML = d4.toDateString();

// методи для витягування потрібних блоків даних
const d20 = new Date();
console.log(d20.getFullYear());
console.log(d20.getMonth());
console.log(d20.getDate());
console.log(d20.getDay());
console.log(d20.getHours());
console.log(d20.getMinutes());
console.log(d20.getSeconds());
console.log(d20.getTime());
console.log(Date.now());

function addLeadingZero(d) {
    // if (M < 10) M = '0' + M;
    return (d < 10) ? '0' + d : d;
}


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function getUserTime(t = new Date()) {
    let Y = t.getFullYear();
    let M = addLeadingZero(t.getMonth() + 1);
    let D = addLeadingZero(t.getDate());
    let d = days[t.getDay()];
    let h = addLeadingZero(t.getHours());
    let m = addLeadingZero(t.getMinutes());

    console.log(Y, M, D, d, h, m);
    console.log(`${Y}.${M}.${D} ${h}:${m} (${d})`);
}
console.log(getUserTime(new Date()));
console.log(getUserTime());





// Створити дату
const DateTask = new Date(2012, 1, 20, 3, 12);
console.log(DateTask);

// new Date(year, month, date, hours, minutes, seconds, ms)
// const d3 = new Date(2022, 9, 6, 11, 15)

// const d4 = new Date('Tue Sep 27 2021 21:10:16 GMT+0300 (Eastern European Summer Time)');


// Показати робочий день


function getWeekDay(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()]
}


let date = new Date(2014, 0, 3);
console.log(getWeekDay(date));
