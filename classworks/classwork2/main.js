// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let firstNumber = prompt('Please enter first number');
let secondNumber = prompt('Please enter second number');
if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else if (firstNumber < secondNumber) {
    console.log(secondNumber)
} else if (firstNumber === secondNumber) {
    console.log('Numbers are equal')
} else {
    console.log('Please try again')
}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let apartmentNumber = 3;
if (apartmentNumber >= 1 && apartmentNumber <= 20) {
    console.log("Перший під'їзд")
} else if (apartmentNumber >= 21 && apartmentNumber <= 48) {
    console.log("Другий під'їзд")
} else if (apartmentNumber >= 49 && apartmentNumber <= 90) {
    console.log("Третій під'їзд")
} else {
    console.log("Невірний номер")
}


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
//   якщо змінна не рівна 10 - тоді НЕВІРНО

let number2 = 10;
if (number2 === 10) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}


// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// якщо в змінну записали щось інше, спрацьовує else

let x = true;
if (typeof x === "number") {
    console.log(1);
} else if (typeof x === "string" ) {
    console.log(2);
} else if (typeof x === "boolean") {
    console.log(3);
} else if (typeof x === "object" || typeof x === "array") {
    console.log(4);
} else {
    console.log(5);
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо
//     ВЧИТИСЯ. Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temperature = 15;
if (temperature >=10 && temperature <=22) {
    console.log('Ми йдемо вчитися')
} else {
    console.log('Ми вчимось вдома онлайн')
}


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності
//   від введеного числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді
//   вивести Повідомлення - що число не вірне ... .

let number = 5;
switch (number) {
    case 1:
        console.log('Авто');
        break;
    case 2:
        console.log('Мото');
        break;
    case 3:
        console.log('Телефон')
        break;
    case 4:
        console.log('Планшет');
        break;
    case 5:
        console.log('Ноутбук');
        break;
    default:
        console.log('Please try again')
}
