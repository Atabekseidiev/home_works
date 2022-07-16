
const array = [
    {
         id: 1,
         name : "Iphone 13 pro max",
         image_url : "https://istore.kg/media/products/MWYW2.webp",
         price: 100250
    },

    {
        id: 2,
        name: "Iphone 13 pro",
        image_url: "https://istore.kg/media/products/iphone-13-pro-blue-select.webp",
        price: 97000
    }
]

let arr = '';
for (let key in array)  {
    arr += 'Id: ' + array[key].id + "<br>";
    arr += 'Названиe: ' + array[key].name + "<br>";
    arr += 'Цена: ' + array[key].price + "<br>";
    arr +=  '<img src = "' + array[key].image_url + '">' + "<br>";
    arr += '<hr>'

}

document.getElementById("arr").innerHTML = arr;
