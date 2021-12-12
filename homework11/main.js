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

let carForm = document.forms.car;




carForm.onsubmit = function (e) {
    e.preventDefault();

    let model = carForm.model.value;
    let type = carForm.type.value;
    let volume = carForm.volume.value;

    let carKey = 'cars';
    let cars = JSON.parse(localStorage.getItem(carKey)) || [];
    cars.push({model: model, type: type, volume: volume});
    localStorage.setItem(carKey, JSON.stringify(cars));

}