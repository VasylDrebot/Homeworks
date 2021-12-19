let goods = JSON.parse(localStorage.getItem('goods'));

goods.forEach((good, index) => {
    let div = document.createElement('div');
    div.classList.add('main');
    let div1 = document.createElement('div');
    div1.classList.add('item');
    div1.innerText = `Name: ${good.nameOfGood} - Amount: ${good.amountOfGoods} - Price: ${good.priceOfGood}`;
    let btn = document.createElement('button');
    btn.innerText = 'Remove';
    let image = document.createElement('img');
    image.src = `${good.picture}`;
    image.style.width = '250px';
    console.log(index);

    btn.onclick = function () {
        let items = JSON.parse(localStorage.getItem("goods"));
        items.splice(index, 1);
        localStorage.setItem('goods', JSON.stringify(items));
    }
    div.append(div1, image, btn);
    document.body.append(div);
});

let button = document.createElement('button');
button.innerText = 'Remove all goods';
button.style.marginLeft = '550px';
document.body.append(button);

button.onclick = function () {
    localStorage.removeItem('goods');
}