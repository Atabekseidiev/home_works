const form1 = document.querySelector('#form1')

form2.addEventListener(('submit'), ()=> {
    const surname = document.querySelector('#surname');
    const name = document.querySelector('#name');
    const patronymic = document.querySelector('#patronymic');
    const date_of_birth = document.querySelector('#date_of_birth');
    const place_of_residence = document.querySelector('#place_of_residence');
    const serial_number = document.querySelector('#serial_number');
    const id = document.querySelector('#id');
    const date_of_receivin = document.querySelector('#date_of_receivin');
    const phone_number = document.querySelector('#phone_number');
    const email = document.querySelector('#email');
    const bank_name = document.querySelector('#bank_name');
    const actual_residence = document.querySelector('#actual_residence');


    localStorage.setItem('surname', surname.value);
    localStorage.setItem('name', name.value);
    localStorage.setItem('patronymic', patronymic.value);
    localStorage.setItem('date_of_birth', date_of_birth.value);
    localStorage.setItem('place_of_residence', place_of_residence.value);
    localStorage.setItem('serial_number', serial_number.value);
    localStorage.setItem('id', id.value);
    localStorage.setItem('date_of_receivin', date_of_receivin.value);
    localStorage.setItem('phone_number', phone_number.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('bank_name', bank_name.value);
    localStorage.setItem('actual_residence ', actual_residence.value);

    window.location.href = 'form1.html';
})