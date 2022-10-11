// function calcSumm(numOne, numTwo) {
//     let result = 1;

//     for (let i = 0; i < numTwo; i++) {
//         result *= numOne;
//     }

//     return result;
// }

// console.log(calcSumm(2, 3));

// function calcSumm(numOne, numTwo) {
//     if (numTwo === 1) {
//         return numOne;
//     } else {
//         return numOne * calcSumm(numOne, numTwo - 1);
//     }
// }

// console.log(calcSumm(2, 3));

// function showMassage(text, name) {
//     console.log(`${text}, ${name}!`);
//     setTimeout(showMassage, 500, text, name);
// }

// setTimeout(showMassage, 500, 'Hello', 'Ross');

function showNumber(num) {
    console.log(num);
    if(num < 5) {
        setTimeout(showNumber, 1000, ++num);
    }
}

setTimeout(showNumber, 1000, 3);

