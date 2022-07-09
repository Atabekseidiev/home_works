const btn_1 = document.querySelector('#btn');
const container = document.querySelector('#container');

const showNotification = () =>{
    const element  = document.createElement('div');
    element.className = 'notification';
    element.innerText = 'Hello!'
    container.append(element);
    setTimeout( () => element.remove(), 1500);
    setTimeout(element);
}

btn_1.addEventListener( 'click', showNotification);

btn_1.style.width = '150px';
btn_1.style.height = '50px';
btn_1.style.backgroundColor = 'yellow';


