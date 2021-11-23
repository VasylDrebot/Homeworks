// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

let square = (a, b) => a * b;

console.log(square(5, 10));

// - створити функцію яка обчислює та повертає площу кола

let square1 = (r) => {
    const p = 3.14;
    let result = p * (r ** 2);
    return result;
}

console.log(square1(6));


// - створити функцію яка обчислює та повертає площу циліндру

let square2 = (r, h) => {
    const p = 3.14;
    let result2 = 2 * p * r * h;
    return result2;
}

console.log(square2(5, 8));


// - створити функцію яка приймає масив та виводить кожен його елемент

let showElement = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

showElement([2,8,9,16,20,30, 50,60]);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let createText = (text) => document.write(`<p>${text}</p>`);

createText('Hello world!');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createList = (text1) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text1}</li>`);
    }
    document.write(`</ul>`);
}

createList('Item');



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createList1 = (length, text2) => {
    document.write(`<ul>`);
    for (let i = 0; i < length; i++) {
        document.write(`<li>${text2}</li>`);
    }
    document.write(`</ul>`);
}

createList1(3, 'Item1');


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createList2 = (array) => {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }

    document.write(`</ul>`);
}


createList2([5, 8, true, 'str', false, 10, 'user', 12]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.

let showProperty = (array2) => {
    for (const array2Element of array2) {
        document.write(`<div>${array2Element.id} - ${array2Element.name} - ${array2Element.age}</div>`)
    }
}

showProperty([{id: 1, name: 'Michael', age: 29}, {id: 2, name: 'Kate', age: 43}, {id: 3, name: 'Marry', age: 18}]);


