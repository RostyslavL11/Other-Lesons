document.querySelector("#form").addEventListener('keyup', (e) => {
    console.log(e.target);
    if(e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
});