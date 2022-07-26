const form1 = document.querySelector('#form1');

form1.addEventListener('submit', ()=> {
const elements = document.querySelectorAll('#form1 input, #form1 select, #form1 textarea');
    for (let i = 0; i < elements.length; i++){
        if (elements[i].hasAttribute('data-required')){
            if (elements[i].value === ''){
                elements[i].classList.add ('empty-field');
            }
        }

}
})

