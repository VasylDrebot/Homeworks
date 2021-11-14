// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті
// години попадає число(в першу, другу, третю или четверту частину години).

let time = 30;
if (time >= 1 && time <= 15) {
    console.log('Перша частина години')
} else if (time >= 16 && time <= 30) {
    console.log('Друга частина години')
} else if (time >= 31 && time <= 45) {
    console.log('Третя частина години')
} else if (time >= 46 && time <= 59) {
    console.log('Четверта частина години')
} else {
    console.log('Something went wrong')
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

let day = 10;
if (day >= 1 && day <= 10) {
    console.log('Перша декада місяця')
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада місяця')
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада місяця')
} else {
    console.log('Please try again')
}


// - У нас є змінна test не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false.
//     Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = 'skfhf';
if (!test) {
    console.log('Вірно')
}else {
    console.log('Неправильно')
}

let test1 = !!'' ? 'Вірно' : 'Неправильно';
console.log(test1);

let test2 = !!'String' ? 'Вірно' : 'Неправильно';
console.log(test2);



// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//   Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 1;
if (a !== 0) {
    console.log('Вірно')
}else {
    console.log('Невірно')
}


// let a = 0;
// if (a !== 0) {
//     console.log('Вірно')
// }else {
//     console.log('Невірно')
// }

// let a = -3;
// if (a !== 0) {
//     console.log('Вірно')
// }else {
//     console.log('Невірно')
// }



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//   відображається інфа що заплановано на цей день.

let dayOfAWeek = 2;
switch (dayOfAWeek) {
    case 1:
        console.log('Go to work!');
        break;
    case 2:
        console.log('Do the shopping');
        break;
    case 3:
        console.log('Do the cooking');
        break;
    case 4:
        console.log('Do your hair');
        break;
    case 5:
        console.log('Go to the cafe');
        break;
    case 6:
        console.log('Do the laundry');
        break;
    case 7:
        console.log('Do exercise')
        break;
    default:
        console.log('Just relax')
}


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = 1524;
if (year % 4 === 0) {
    console.log('Високосний рік')
}else {
    console.log('Невисокосний рік')
}


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
// let answer = prompt('Яка «офіційна» назва JavaScript?');
// if (answer === 'ECMAScript') {
//     alert('Правильно!')
// } else {
//     alert('Не знаєте? ECMAScript!')
// }
