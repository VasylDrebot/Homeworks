// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let btn = document.getElementById('btn');

btn.onclick = function () {
    let name = item1.value;
    let age = item2.value;
    localStorage.setItem('user', JSON.stringify({name: name, age: age}));
}
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');
let btn1 = document.getElementById('btn1');

let key = 'car';
localStorage.setItem(key, JSON.stringify([]));

btn1.onclick = function () {
    let model = item3.value;
    let type = item4.value;
    let volume = item5.value;

    let item = JSON.parse(localStorage.getItem(key));
    item.push({model: model, type: type, volume: volume});
    localStorage.setItem(key, JSON.stringify(item));

}