// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let goods = document.forms.goods;
console.log(goods);

goods.onsubmit = function (e) {
    e.preventDefault();
    let nameOfGood = goods.nameOfGood.value;
    let amountOfGoods = goods.amountOfGoods.value;
    let priceOfGood = goods.priceOfGood.value;
    let picture = goods.picture.value;

    let products = JSON.parse(localStorage.getItem('goods')) || [];
    products.push({nameOfGood, amountOfGoods, priceOfGood, picture});
    localStorage.setItem('goods', JSON.stringify(products));

}