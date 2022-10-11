// Как работает setInterval и settimeout в js

function getDigit(start, end) {
    console.log('start', start);

    let stopInterval = setInterval(() => {
        start++;

        if (start === 4) {
            clearInterval(stopInterval);
        }
        console.log('startInterval', start);

    }, 1000);

    console.log('end', end);
}

// getDigit(1, 10);


// Задача 1
function countUp(number) {
    let Interval = setInterval(() => {
        number++;

        if (number === 20) {
            clearInterval(Interval);
        }

        console.log(number);
    }, 100);
}

// countUp(1);

// Задача 2
function countNumbers(number, interval) {
    let i = number;
    let timerId = setTimeout(function go() {
        console.log(i);
        if (i < 20) {
            setTimeout(go, interval);
        }
        i++;
    }, interval);
}

// countNumbers(1, 10);

////////////////////////////////////////////
// setInterval(function_name, time)

const test = document.getElementById('test');
const stop = document.getElementById('stop');
const out = document.getElementById('out');
let sdvig = 0;
let timer;

// move();
function move() {
    test.style.marginLeft = sdvig + 'px';
    sdvig += 10;
    timer = setTimeout(move, 50);
}

// let timer = setInterval(move, 50);

stop.addEventListener('click', () => {
    // clearInterval(timer);
    clearTimeout(timer);
});

// setTimeout(move, 5000);

let a = 5;
// obr();
function obr() {
    out.innerHTML = a;
    a--;
    if (a < 0) {
        clearTimeout(timer);
        alert('Tamer has been stoped');
    } else {
        timer = setTimeout(obr, 1000);
    }
}


// setTimeout з нульовою затримкою
setTimeout(() => console.log("Світ"));
console.log("Привіт");



// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setInterval(() => {
//         console.log(current);
        
//         if (current == to) {
//             clearInterval(timerId);
//         }
        
//         current++;
//     }, 1000);
// }

// printNumbers(1, 5);

// function printNumbers(from, to) {
//     let current = from;
//     setTimeout(function go() {
//         console.log(current);

//         if (current < to) {
//             setTimeout(go, 1000);
//         }

//         current++;
//     }, 1000);
// }

// printNumbers(2, 4);



