// JavaScript урок делегирование событий
// function init() {
//     const ul = document.querySelector('ul');
//     const btnClickHandler = (button) => {
//         button.style.background = 'red';
//     };

//     ul.addEventListener('click', (event) => {
//         if (event.target.classList.contains('button')) {
//             btnClickHandler(event.target);
//         } else {
//             alert('clicked in UL!');
//         }
//     });
// }


// init();


function asynkRender() {
    const list = document.querySelector('#list');

    const template = `
        <li class="list__item">
            <button class="button">clck me</button>
        </li>
        <li class="list__item">
            <button class="button">clck me</button>
        </li>
        <li class="list__item">
            <button class="button">clck me</button>
        </li>
        <li class="list__item">
            <button class="button">clck me</button>
        </li>
        <li class="list__item">
            <button cla ss="button">clck me</button>
        </li>
    `;

    const btnClickHandler = (button) => {
        button.style.background = 'red';
    };


    setTimeout(() => list.innerHTML = template, 2000);
    setTimeout(() => list.innerHTML += list.innerHTML + template, 3000);

    list.addEventListener('click', (event) => {
        if (event.target.classList.contains('button')) {
            btnClickHandler(event.target);
        } else {
            alert('clicked in UL!');
        }
    });

}

asynkRender();