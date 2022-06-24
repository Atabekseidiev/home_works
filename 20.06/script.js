/**********   Заполните массив 10-ю иксами с помощью цикла.    [x,x...]   *********/

/*
let arr = [];
for(i =1; i <= 10;i++) {
        arr.push('x');
    }
    console.log(arr);
*/


/********* У нас есть массив с элементами 1, 2, 115, 4, 58, 5 ,7 ,99.
 С помощью цикла for и оператора if нужно проверить есть ли в массиве число
 со значением, равным = 4. Если есть - надо вывести окошко с сообщением = 'ЕСТЬ!!!' *********/

/*
const numbers = [1, 2, 115, 4, 58, 5 ,7 ,99];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === 4){
            console.log('ЕСТЬ!!!');
        }
    }
*/

/******* Напишите функцию, которая разворачивает массив в обратном порядке
 и затем ее возвращает.  Функция наша  принимает массив любых элементов.  *********/

const reverseArray = (data) => {
    const newArray = [];
    for ( let i = 0; i < data.length -1; i >= 0; i--){
        newArray.push(data[i]);
    }
    return newArray;
}
const myArray = [1, 2, 3, 4];
const result = reverseArray(myArray);
console.log(result);

/*
// обратная операция
   1) let i = 4;
    i >= 0; //true
    newArray.push(data[4]);
    newArray = [5];

    2) i -- ;
    i >= 0; //true
    newArray.push(data[3]);
    newArray = [5, true, 21];


    3) i -- ;
    i >= 0; //true
    newArray.push(data[2]);
    newArray = [3,true, 21];

    4) i -- ;
    i >= 0; //true
    newArray.push(data[1]);
    newArray = [2,true, 21];

    5) i -- ;
    i >= 0; //true
    newArray.push(data[1]);
    newArray = [2,true, 21];
*/

/*



1)  let i = 0;
    0 < 4; // true
    console.log(data[0]);

2) i = 0;
    1 < 4; // true
    console.log(data[1]);

    и т.д*/
