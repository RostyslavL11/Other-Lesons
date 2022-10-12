console.log('Просто в програмі');
console.log(this);

function abc() {
    console.log('Всередині функції');
    console.log(this);
    console.log(3+5/2);
    this.style.background = 'red';
}

// abc();

// document.querySelector('p').onclick = abc;
// let p = document.querySelectorAll('p');
// p.forEach(function(element) {
//     element.onclick = abc;
// });



// як буде мінятись this коли ми вик addEventListener 
// document.querySelector('p').addEventListener('click', abc, false);

let p = document.querySelectorAll('p');
p.forEach(function(element) {
    element.addEventListener('click', abc, false);
});