/*******  Дан массив с числами: -5,  10,  5, 55,  -1, 22,  -4 , 36, -45:
 Оставьте в нем только отрицательные числа.*******/

/*const numbers = [-5,10,5,55,-1,22,-4,36,-45];
const numbers2 = numbers.filter(item => item < 0)
console.log(numbers2);*/

/*******  Дан массив с числами. Сделайте из него массив,
 состоящий из квадратов этих чисел.*******/

const numbers = [1,2,3,4,5,6,7,8,9,10];
const numbers2 = numbers.map(number => number*number);
console.log(numbers2);
