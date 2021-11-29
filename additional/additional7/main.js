//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }


function User (id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, name, catchPrase, bs) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.adress = {street: street, suite: suite, city: city, zipcode: zipcode, geo: {lat: lat, lng: lng}};
    this.phone = phone;
    this.website = website;
    this.company = {name: name, catchPrase: catchPrase, bs: bs};
}

let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz','Kulas Light','Apt. 556', 'Gwenborough', '92998-3874',
    '-37.3159', '81.1496', '1-770-736-8031 x56442','hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net',
    'harness real-time e-markets');
console.log(user);



// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


function Tag (title, action, titleOfAttr, actionOfAttr, titleOfAttr1, actionOfAttr1) {
    this.title = title;
    this.action = action;
    this.attrs = [{titleOfAttr: titleOfAttr, actionOfAttr: actionOfAttr},
        {titleOfAttr: titleOfAttr1, actionOfAttr: actionOfAttr1}
    ];
}

let tag = new Tag('a', `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.`,
    'target', 'Имя окна или фрейма, куда браузер будет загружать документ.',
    'href', 'Задает адрес документа, на который следует перейти.');
console.log(tag);

let tag1 = new Tag ('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    'align', 'Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.');
console.log(tag1);

let tag2 = new Tag ('h1', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.',
'align', 'Определяет выравнивание заголовка', 'contextmenu', 'Устанавливает контекстное меню для элемента.');
console.log(tag2);

let tag3 = new Tag ('span', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.',
    'lang', 'Браузер использует значение параметра для правильного отображения некоторых национальных символов.', 'style',
    'Применяется для определения стиля элемента с помощью правил CSS.')
console.log(tag3);

let tag4 = new Tag ('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    'alt', 'Альтернативный текст для кнопки с изображением.', 'form', 'Связывает поле с формой по её идентификатору.')
console.log(tag4);

let tag5 = new Tag('form', 'Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.',
    'action', 'URI-адрес программы, которая обрабатывает информацию переданную через форму. Это значение может быть переписано с помощью атрибута formaction на <button> или <input> элементе.',
    'method', 'HTTP метод, который браузер использует, для отправки формы.');
console.log(tag5);

let tag6 = new Tag ('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
    'selected', 'Заранее устанавливает определенный пункт списка выделенным.', 'value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.');
console.log(tag6);

let tag7 = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
    'multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.', 'required', 'Список обязателен для выбора перед отправкой формы.');
console.log(tag7);



