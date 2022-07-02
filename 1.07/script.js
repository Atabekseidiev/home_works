/********1) Даны картинки. Привяжите к каждой картинке событие, чтобы по клику
 на картинку алертом выводился ее описание.********/

const img = () => {
    alert('Велосипед STELS Navigator 910 MD 29');
}
const image = document.querySelector('#img');
image.onclick = img;

/********2) Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку выведите
 куда данная ссылка ссылается.********/
const link1 = () => {
    alert( 'google.com,megaCom.kg, beeline.kg/ru');
}
const link = document.querySelector('#link');
link.onmouseenter = link1;