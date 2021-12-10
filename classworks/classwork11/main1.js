let key = 'favourites';
let main = document.getElementsByClassName('main')[0];
let users = JSON.parse(localStorage.getItem(key));

for (const user of users) {
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    div1.innerText = `${user.name} - ${user.age} - ${user.status}`;


    div.append(div1);
    main.appendChild(div);
}