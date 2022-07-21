const form2 = document.querySelector('#form2');

form.addEventListener('submit', () => {
    const company_name = document.querySelector('#company_name');
    const job_title = document.querySelector('#job_title');
    const salary1 = document.querySelector('#ZP');
    const salary3 = document.querySelector('#ZP2');
    const name_of_product = document.querySelector('#name_of_product');
    const price = document.querySelector('#price');
    const quantity = document.querySelector('#quantity');
    const sum = document.querySelector('#sum');
    const type_of_loan = document.querySelector('#type_of_loan');
    const credit_term = document.querySelector('#credit_term');
    const place_of_receipt = document.querySelector('#place_of_receipt');

    localStorage.setItem('company_name', company_name.value);
    localStorage.setItem('job_title', job_title.value);
    localStorage.setItem('salary1', salary1.value);
    localStorage.setItem('salary3', salary3.value);
    localStorage.setItem('name_of_product', name_of_product.value);
    localStorage.setItem('price', price.value);
    localStorage.setItem('quantity',quantity .value);
    localStorage.setItem('sum', sum.value);
    localStorage.setItem('type_of_loan', type_of_loan.value);
    localStorage.setItem('credit_term', credit_term.value);
    localStorage.setItem('place_of_receipt', place_of_receipt.value);

})
