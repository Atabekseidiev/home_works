const bloks = document.querySelector('#blok1');

bloks.addEventListener('click', () => {
    bloks.classList.add('background-color');
})
bloks.addEventListener('dblclick', () => {
    bloks.classList.remove('background-color');
})


const bloks2 = document.querySelector('#blok2');

bloks2.addEventListener('click', () => {
    bloks2.classList.add('background-color2');
})
bloks2.addEventListener('dblclick', () => {
    bloks2.classList.remove('background-color2');
})

const bloks3 = document.querySelector('#blok3');

bloks3.addEventListener('click', () => {
    bloks3.classList.add('background-color3');
})
bloks3.addEventListener('dblclick', () => {
    bloks3.classList.remove('background-color3');
})


function showNotification() {

    let notification = document.querySelector('#notification');
    setTimeout(() => notification.remove(), 1500);
}
setTimeout(showNotification);
