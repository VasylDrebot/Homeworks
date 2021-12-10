// є масив -
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let favoritesKey = 'favourites';
localStorage.setItem(favoritesKey, JSON.stringify([]));
let block = document.getElementsByClassName('block')[0];

for (const user of users) {
    let div = document.createElement('div');
    const info = document.createElement('div');
    info.innerText = `name: ${user.name} - age: ${user.age} - status: ${user.status}`;
    let button = document.createElement('button');
    button.innerText = 'Add to favourites';


    button.onclick = function () {
        let favourites = JSON.parse(localStorage.getItem(favoritesKey));
        favourites.push(user);
        localStorage.setItem(favoritesKey, JSON.stringify(favourites));
        button.disabled = true;
    }
    div.append(info, button);
    block.appendChild(div);


}