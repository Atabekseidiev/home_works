/*

const btn_1 = document.querySelector('#btn1');
const btn_2 = document.querySelector('#btn2');
const btn_3 = document.querySelector('#btn3');
const container = document.querySelector('#container');

const showNotification = (options) =>{
        const element = document.createElement('div');
        element.className = options.style;
        element.classList.add(`notification`);
        element.innerText = options.html;
        container.append(element);
        setTimeout(() => element.remove(), 1500);
}

btn_1.addEventListener( 'click',() =>{
    showNotification({
        html: 'info_notification',
        style: 'info_notification'
    });
})

btn_2.addEventListener( 'click',() =>{
    showNotification({
        html: 'error_notification',
        style: 'error_notification'
    });
})

btn_3.addEventListener( 'click',() =>{
    showNotification({
        html: 'success_notification',
        style: 'success_notification'
    });
})
*/


const smile1 = document.querySelector('#img1');
const user_verification = () => {
    let ask = prompt('как зовут пользователя?');
    if (ask){
        alert(`Добро пожаловать, ${ask}`);
        smile1.src = ('./img/1.png');
    }
}

smile1.addEventListener('click',user_verification);



const startTimer = document.querySelector('#btn1');
const stopTimer = document.querySelector('#btn2');






