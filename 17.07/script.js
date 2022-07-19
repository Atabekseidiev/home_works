const form = document.querySelector('#form');

form.addEventListener('submit', () => {
    const Company_name = document.querySelector('#Company_name');
    const job_title = document.querySelector('#job_title');
    const salary1 = document.querySelector('#ZP');
    const salary3 = document.querySelector('#ZP2');
    const Name_of_product = document.querySelector('#Name_of_product');
    const price = document.querySelector('#price');
    const quantity = document.querySelector('#quantity');
    const sum = document.querySelector('#sum');
    const type_of_loan = document.querySelector('#type_of_loan');
    const credit_term = document.querySelector('#credit_term');
    const place_of_receipt = document.querySelector('#place_of_receipt');


    console.log(Company_name.value);
    console.log(job_title.value);
    console.log(salary1.value);
    console.log(salary3.value);
    console.log(Name_of_product.value);
    console.log(price.value);
    console.log(quantity.value);
    console.log(sum.value);
    console.log(type_of_loan.value);
    console.log(credit_term.value);
    console.log(place_of_receipt.value);
})
