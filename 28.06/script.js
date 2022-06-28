/*********  Напишите функцию, который будет выводить сообщение “Hello World” раз в секунду,
 но всего 5 раз. После 5 итераций скрипт должен вывести сообщение “Done”,
 после чего процесс завершится.
 При решении данной задачи нельзя вызывать setTimeout. ***********/


const array = () => {
    console.log( “Hello World” );
}
const intervalID = (id) => {
    clearInterval(id);
}

const stopInterval = intervalID( array, 1000);